const express = require('express');
const cors = require('cors');
const { v4 } = require('uuid');
const app = express();
const port = 3000;

const users = [
  { name: 'Bobby', age: 15 },
  { name: 'Peter', age: 20 },
  { name: 'Chris', age: 25 },
];

let todos = [
  { value: 'купити молоко', checked: false, id: '13' },
  { value: 'купити сир', checked: true, id: '14' },
  { value: 'оплатити інтернет', checked: true, id: '15' },
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: v4(),
    ...req.body,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id !== req.params.id);

  res.status(204).send();
});

app.put('/todos/:id', (req, res) => {
  todos = todos.map(todo =>
    todo.id === req.params.id
      ? {
          ...todo,
          ...req.body,
        }
      : todo,
  );

  const todo = todos.find(todo => todo.id === req.params.id);

  res.status(202).send(todo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
