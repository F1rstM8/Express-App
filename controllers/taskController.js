
let tasks = [];
let currentId = 1;


exports.getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};


exports.createTask = (req, res) => {

  const { body } = req.body;

  if (!body) {
    return res.status(400).json({ error: "Поле 'body' обов'язкове" });
  }

  const newTask = {
    id: currentId++, 
    body, 
    isDone: false, 
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};


exports.getTaskById = (req, res) => {
 
  const id = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Завдання не знайдено" });
  }

  res.status(200).json(task);
};


exports.updateTask = (req, res) => {
 
  const id = parseInt(req.params.id, 10);
  const { body, isDone } = req.body;

  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Завдання не знайдено" });
  }


  if (body !== undefined) {
    tasks[taskIndex].body = body;
  }
  if (isDone !== undefined) {
    tasks[taskIndex].isDone = isDone;
  }

  res.status(200).json(tasks[taskIndex]);
};

exports.deleteTask = (req, res) => {
 
  const id = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Завдання не знайдено" });
  }

 
  tasks.splice(taskIndex, 1);

  res.status(204).send();
};
