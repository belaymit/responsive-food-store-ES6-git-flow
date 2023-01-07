import {
  loginBtn, loginForm, searchForm, shoppingCart, navBar,
} from './constants.js';

const showLogin = () => {
  loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
  });
  window.onscroll = () => {
    loginBtn.classList.remove('active');
  };
};

export default showLogin;