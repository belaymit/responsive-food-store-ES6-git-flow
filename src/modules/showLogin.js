import { loginBtn, loginForm } from './constants.js';

const showLogin = () => {
  loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
  });
};

export default showLogin;