const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const users = [
  { name: 'Bobby', age: 15 },
  { name: 'Peter', age: 20 },
  { name: 'Chris', age: 25 },
];

const todos = [
  { value: 'купити молоко', checked: false, id: '13' },
  { value: 'купити сир', checked: true, id: '14' },
  { value: 'оплатити інтернет', checked: true, id: '15' },
];

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
