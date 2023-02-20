const express = require('express');
const app = express();
const port = 3000;

const users = [
  { name: 'Bobby', age: 15 },
  { name: 'Peter', age: 20 },
  { name: 'Chris', age: 25 },
];

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
