const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Task One', completed: false },
    { id: 2, title: 'Task Two', completed: true }
  ]);
});