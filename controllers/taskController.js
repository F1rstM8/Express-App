

let tasks = [];
let currentId = 1;

exports.getAllTasks = (req, res, next) => {
  try {
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.createTask = (req, res, next) => {
  try {
    
    const { body } = req.body;
    
    const newTask = {
      id: currentId++,
      body,
      isDone: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.getTaskById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const task = tasks.find((t) => t.id === id);

    if (!task) {
      const err = new Error('Завдання не знайдено');
      err.status = 404;
      return next(err);
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { body, isDone } = req.body;
    
    const taskIndex = tasks.findIndex((t) => t.id === id);

    if (taskIndex === -1) {
      const err = new Error('Завдання не знайдено');
      err.status = 404;
      return next(err);
    }

    if (body !== undefined) tasks[taskIndex].body = body;
    if (isDone !== undefined) tasks[taskIndex].isDone = isDone;

    res.status(200).json(tasks[taskIndex]);
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex((t) => t.id === id);

    if (taskIndex === -1) {
      const err = new Error('Завдання не знайдено');
      err.status = 404;
      return next(err);
    }

    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};