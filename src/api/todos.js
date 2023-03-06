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

// ------ fetch ------
// const URL = 'https://6406287e40597b65de4beab2.mockapi.io';

// export const createTodo = newTodo => {
//   return fetch(`${URL}/todos`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newTodo),
//   });
// };

// export const readTodos = () => {
//   return fetch(`${URL}/todos`).then(res => {
//     if (res.ok) {
//       return res.json();
//     }

//     console.log(res);
//     throw new Error(res.statusText);
//   });
// };

// export const updateTodo = (id, payload) => {
//   return fetch(`${URL}/todos/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
// };

// export const deleteTodo = id => {
//   return fetch(`${URL}/todos/${id}`, {
//     method: 'DELETE',
//   });
// };
