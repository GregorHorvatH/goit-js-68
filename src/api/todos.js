import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const createTodo = newTodo => {
  return axios.post(`/todos`, newTodo);
};

export const readTodos = () => {
  return axios.get(`/todos`).then(({ data }) => data);
};

export const updateTodo = (id, payload) => {
  return axios.put(`/todos/${id}`, payload);
};

export const deleteTodo = id => {
  return axios.delete(`/todos/${id}`);
};
