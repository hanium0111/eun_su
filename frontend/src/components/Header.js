import React, { useState, useEffect } from 'react';
import '../assets/styles/css/Header.css';
import { fetchUserProfile, openLoginWindow } from '../services/apiService';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserProfile()
      .then((data) => {
        if (data) setUser(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  useEffect(() => {
    const handleAuthComplete = (event) => {
      if (event.data === 'authComplete') {
        fetchUserProfile()
          .then((data) => {
            if (data) setUser(data);
          })
          .catch((error) => console.error('Error:', error));
      }
    };

    window.addEventListener('message', handleAuthComplete);

    return () => {
      window.removeEventListener('message', handleAuthComplete);
    };
  }, []);

  const handleLogin = () => {
    openLoginWindow()
      .then((data) => {
        if (data) setUser(data);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="menu-icon">
        {/* 메뉴 아이콘 구현 */}
      </div>
      {user ? (
        <div className="user-info">
          <img src={user.profileImageUrl} alt="Profile" className="profile-image" />
          <span>{user.displayName}</span>
        </div>
      ) : (
        <button onClick={handleLogin} className="login-button">Login</button>
      )}
    </header>
  );
}

export default Header;
