import {
  cartBtn,
  loginForm, navBar, searchForm, shoppingCart,
} from './constants.js';

const showCart = () => {
  cartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
  });
  window.onscroll = () => {
    cartBtn.classList.remove('active');
  };
};

export default showCart;