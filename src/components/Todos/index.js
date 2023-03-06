import { v4 as uuidv4 } from 'uuid';
import { getTodo, modal, loadTodosLayout } from '../index';
import { createTodo, readTodos, updateTodo, deleteTodo } from '../../api/todos';

import './styles.css';

loadTodosLayout();

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.todo-list'),
  loader: document.querySelector('.loader'),
  modalButton: modal.element().querySelector('button'),
};

let todos = [];

const render = () => {
  const itemList = todos.map(todo => getTodo(todo)).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', itemList);
};

const showLoader = () => {
  refs.loader.classList.add('show');
};

const hideLoader = () => {
  refs.loader.classList.remove('show');
};

const loadTodos = () => {
  showLoader();

  return readTodos()
    .then(data => {
      todos = data;
    })
    .catch(error => {
      todos = [];
      console.log('error happened:', error.message);
    })
    .finally(() => {
      hideLoader();
    });
};

const handleSubmit = event => {
  const input = event.target.elements.text;
  const { value } = input;
  const newTodo = { value, checked: false };

  event.preventDefault();
  showLoader();

  createTodo(newTodo)
    .then(() => {
      todos.push(newTodo);
      input.value = '';
      render();
    })
    .catch(error => {
      console.log('error happened:', error.message);
    })
    .finally(() => {
      hideLoader();
    });
};

const removeTodo = id => {
  showLoader();

  deleteTodo(id)
    .then(() => {
      todos = todos.filter(todo => todo.id !== id);
      render();
    })
    .catch(error => {
      console.log('error happened:', error.message);
    })
    .finally(() => {
      hideLoader();
    });
};

const viewTodo = id => {
  const text = modal.element().querySelector('.text');

  text.textContent = id;
  modal.show();
};

const toggleCheckbox = id => {
  const { checked } = todos.find(todo => todo.id === id);

  showLoader();

  updateTodo(id, { checked: !checked })
    .then(() => {
      todos = todos.map(item => {
        return item.id === id
          ? {
              ...item,
              checked: !item.checked,
            }
          : item;
      });

      render();
    })
    .catch(error => {
      console.log('error happened:', error.message);
    })
    .finally(() => {
      hideLoader();
    });
};

const handleTodoClick = event => {
  const { action } = event.target.dataset;
  const parent = event.target.closest('li');
  const { id } = parent?.dataset || {};

  switch (action) {
    case 'delete':
      removeTodo(id);
      break;

    case 'view':
      viewTodo(id);
      break;

    case 'check':
      toggleCheckbox(id);
      break;
  }
};

loadTodos().then(() => {
  render();
});

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleTodoClick);
refs.modalButton.addEventListener('click', modal.close);
// window.addEventListener('keydown', () => {
//   if (modal.visible()) {
//     modal.close();
//   }
// });
