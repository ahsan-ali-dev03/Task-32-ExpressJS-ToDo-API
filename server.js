const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Temporary in-memory task data
let tasks = [
  {
    id: 1,
    title: "Learn Express.js",
    description: "Practice REST API development",
    completed: false
  }
];

let nextId = 2;

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Task 32 - Express.js To-Do API is running",
    endpoints: {
      getAllTasks: "GET /api/tasks",
      getTask: "GET /api/tasks/:id",
      addTask: "POST /api/tasks",
      updateTask: "PUT /api/tasks/:id",
      deleteTask: "DELETE /api/tasks/:id"
    }
  });
});

// GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// GET one task
app.get("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// POST create a task
app.post("/api/tasks", (req, res) => {
  const { title, description = "", completed = false } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    description,
    completed: Boolean(completed)
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update a task
app.put("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, description = "", completed = false } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  tasks[taskIndex] = {
    id,
    title: title.trim(),
    description,
    completed: Boolean(completed)
  };

  res.json(tasks[taskIndex]);
});

// DELETE a task
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(taskIndex, 1);
  res.json({ message: "Task deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
