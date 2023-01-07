import { shoppingCart, cartBtn } from './constants.js';

const showCart = () => {
  cartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('active');
  });
};

export default showCart;