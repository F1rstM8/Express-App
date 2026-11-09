

const express = require('express');
const taskController = require('./controllers/taskController');
const { validateTask } = require('./middlewares/validateTask');

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/tasks', taskController.getAllTasks);

app.post('/tasks', validateTask, taskController.createTask);
app.get('/tasks/:id', taskController.getTaskById);
app.put('/tasks/:id', validateTask, taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);


app.use((err, req, res, next) => {
  const status = err.status || 500;
  
  res.status(status).json({
    error: {
      message: err.message || 'Внутрішня помилка сервера',
      status: status
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});