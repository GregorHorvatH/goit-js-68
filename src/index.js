import { v4 as uuidv4 } from 'uuid';
import * as basicLightbox from 'basiclightbox';

import 'basiclightbox/dist/basicLightbox.min.css';
import './styles.css';

const getTodo = ({ id, value, checked }) => `
  <li data-id=${id}>
    <input data-action="check" type="checkbox" ${checked ? 'checked' : ''} />
    <span>${value}</span>
    <button data-action="delete">x</button>
    <button data-action="view">view</button>
  </li>`;

const modal = basicLightbox.create(`
  <div class="modal">
    <h4>Lorem ipsum</h4>
    <p class="text">test modal text</p>
    <button>ok</button>
  </div>
`);

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.todo-list'),
  modalButton: modal.element().querySelector('button'),
};

let todos = [];

const render = () => {
  const itemList = todos.map(todo => getTodo(todo)).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', itemList);
};

const loadTodos = () => {
  try {
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    // throw new Error('lorem ipsum');
  } catch (error) {
    console.log('error happened:', error.message);
    todos = [];
  }
};

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const handleSubmit = event => {
  const input = event.target.elements.text;
  const { value } = input;
  const newTodo = { id: uuidv4(), value, checked: false };

  event.preventDefault();
  todos.push(newTodo);
  input.value = '';

  saveTodos();
  render();
};

const deleteTodo = id => {
  todos = todos.filter(todo => todo.id !== id);

  saveTodos();
  render();
};

const viewTodo = id => {
  const text = modal.element().querySelector('.text');

  text.textContent = id;
  modal.show();
};

const toggleCheckbox = id => {
  todos = todos.map(item => {
    return item.id === id
      ? {
          ...item,
          checked: !item.checked,
        }
      : item;
  });

  saveTodos();
  render();
};

const handleTodoClick = event => {
  const { action } = event.target.dataset;
  const parent = event.target.closest('li');
  const { id } = parent?.dataset || {};

  switch (action) {
    case 'delete':
      deleteTodo(id);
      break;

    case 'view':
      viewTodo(id);
      break;

    case 'check':
      toggleCheckbox(id);
      break;
  }
};

loadTodos();
render();

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleTodoClick);
refs.modalButton.addEventListener('click', modal.close);
// window.addEventListener('keydown', () => {
//   if (modal.visible()) {
//     modal.close();
//   }
// });
