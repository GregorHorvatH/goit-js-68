const todosTemplate = () => `
  <form class="form">
    <input type="text" name="text" />
    <button type="submit">+ Add</button>
  </form>
  
  <p class="loader">Loading...</p>

  <ul class="todo-list"></ul>
`;

export const loadTodosLayout = () => {
  document.body.insertAdjacentHTML('beforeend', todosTemplate());
};
