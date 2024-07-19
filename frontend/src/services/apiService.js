import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:5000', // 백엔드 서버 주소
  withCredentials: true,
});

export const fetchUserProfile = async () => {
  try {
    const response = await api.get('/auth/profile');
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Unexpected response status:', response.status);
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error('Error fetching user profile:', error.response.data);
    } else {
      console.error('Error fetching user profile:', error.message);
    }
    throw new Error('Failed to fetch user profile');
  }
};

export const openLoginWindow = async () => {
  return new Promise((resolve, reject) => {
    const width = 500;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const url = 'http://localhost:5000/auth/google';
    const loginWindow = window.open(url, 'Google Login', `width=${width},height=${height},top=${top},left=${left}`);

    const checkLoginStatus = setInterval(() => {
      if (loginWindow.closed) {
        clearInterval(checkLoginStatus);
        fetchUserProfile()
          .then(resolve)
          .catch(reject);
      }
    }, 1000);
  });
};

export default api;
