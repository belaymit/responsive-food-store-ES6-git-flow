import {
  loginForm, navBar, searchBtn, searchForm, shoppingCart,
} from './constants.js';

const showSearchBar = () => {
  searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
  });
};

export default showSearchBar;