import { searchBtn, searchForm } from './constants.js';

const showSearchBar = () => {
  searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
  });
};

export default showSearchBar;