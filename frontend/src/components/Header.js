import React, { useState, useEffect } from 'react';
import '../assets/styles/css/Header.css';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 사용자 프로필을 가져옵니다.
    fetch('/auth/profile')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data) setUser(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  useEffect(() => {
    // 인증 완료 메시지를 처리하는 함수입니다.
    const handleAuthComplete = (event) => {
      if (event.data === 'authComplete') {
        // 인증이 완료되면 사용자 프로필을 다시 가져옵니다.
        fetch('/auth/profile')
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return null;
            }
          })
          .then((data) => {
            if (data) setUser(data);
          })
          .catch((error) => console.error('Error:', error));
      }
    };

    // 메시지 이벤트 리스너를 추가합니다.
    window.addEventListener('message', handleAuthComplete);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      window.removeEventListener('message', handleAuthComplete);
    };
  }, []);

  const handleLogin = () => {
    const width = 500;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const url = "http://localhost:3000/auth/google"; // 백엔드의 구글 로그인 URL
    const loginWindow = window.open(url, "Google Login", `width=${width},height=${height},top=${top},left=${left}`);

    const checkLoginStatus = setInterval(() => {
      if (loginWindow.closed) {
        clearInterval(checkLoginStatus);
        // 창이 닫힌 후 사용자 프로필을 다시 가져옵니다.
        fetch('/auth/profile')
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return null;
            }
          })
          .then((data) => {
            if (data) setUser(data);
          })
          .catch((error) => console.error('Error:', error));
      }
    }, 1000);
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
