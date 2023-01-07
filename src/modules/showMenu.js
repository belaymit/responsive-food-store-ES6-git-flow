import {
  menuBtn, navBar, loginForm, searchForm, shoppingCart,
} from './constants.js';

const showMenu = () => {
  menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
  });

  window.onscroll = () => {
    navBar.classList.remove('active');
  };
};

export default showMenu;