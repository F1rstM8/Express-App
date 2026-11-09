const express = require("express");
const taskController = require("./controllers/taskController");

const app = express();
const PORT = 3000;


app.use(express.json());


app.get("/tasks", taskController.getAllTasks);
app.post("/tasks", taskController.createTask);
app.get("/tasks/:id", taskController.getTaskById);
app.put("/tasks/:id", taskController.updateTask);
app.delete("/tasks/:id", taskController.deleteTask);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
