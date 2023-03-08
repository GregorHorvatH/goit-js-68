import { getData } from './api';

import './styles.css';

const HITS_PER_PAGE = 5;

let items = [];
let pages = 0;
let page = 0;
let query = '';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  buttons: document.querySelector('.buttons'),
};

const render = () => {
  const list = items
    .map(
      ({ title, url }) =>
        `<li><a href="${url}" target="_blank">${title}</a></li>`,
    )
    .join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list);
};

const renderButtons = () => {
  const buttons = Array(pages)
    .fill()
    .map(
      (_, idx) =>
        `<button ${
          idx === page ? 'class="page active"' : 'class="page"'
        } data-page=${idx}>${idx + 1}</button>`,
    )
    .join('');

  refs.buttons.innerHTML = '';
  refs.buttons.insertAdjacentHTML('beforeend', buttons);
};

const fetchNews = () => {
  getData(query, HITS_PER_PAGE, page)
    .then(data => {
      items = data.hits;
      pages = data.nbPages;

      render();
      renderButtons();
    })
    .catch(error => {
      console.log('error:', error);
    });
};

const handleSubmit = e => {
  const { value } = e.target.elements.query;

  e.preventDefault();

  if (query === value || !value) {
    return;
  }

  query = value;
  page = 0;
  fetchNews();
};

const handlePageClick = e => {
  page = Number(e.target.dataset.page);
  fetchNews();
};

refs.form.addEventListener('submit', handleSubmit);
refs.buttons.addEventListener('click', handlePageClick);
