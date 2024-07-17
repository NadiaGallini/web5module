const express = require('express');
const app = express();
const port = 3000;

// Пример данных ToDo
let todos = [
  { id: 1, text: 'Купить молоко' },
  { id: 2, text: 'Позвонить маме' },
  { id: 3, text: 'Сделать уроки' }
];

// Middleware для обработки JSON
app.use(express.json());

// Роут для получения всех ToDo
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Роут для создания нового ToDo
app.post('/todos', (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: todos.length + 1,
    text
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Роут для удаления ToDo по id
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.sendStatus(204);
});

// Старт сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
