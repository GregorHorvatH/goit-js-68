import { getData } from './api';

import './styles.css';

const HITS_PER_PAGE = 20;

let items = [];
let pages = 0;
let page = 0;
let query = '';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.list'),
  loadMore: document.querySelector('.load-more'),
};

const render = () => {
  const list = items
    .map(
      ({ title, url }) =>
        `<li><a href="${url}" target="_blank">${title}</a></li>`,
    )
    .join('');

  if (!page) {
    refs.list.innerHTML = '';
  }
  refs.list.insertAdjacentHTML('beforeend', list);
};

const fetchNews = () => {
  getData(query, HITS_PER_PAGE, page)
    .then(data => {
      items = data.hits;
      pages = data.nbPages;

      render();
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

const handleLoadMore = e => {
  if (items.length && page < pages) {
    page++;
    fetchNews();
  }
};

refs.form.addEventListener('submit', handleSubmit);
refs.loadMore.addEventListener('click', handleLoadMore);

const onButtonIntersect = entities => {
  const [button] = entities;

  if (button.isIntersecting) {
    handleLoadMore();
  }
};

const observer = new IntersectionObserver(onButtonIntersect);

observer.observe(refs.loadMore);
