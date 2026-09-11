const express = require("express");

const router = express.Router();

const {
    createTask,
    getAllTasks,
    getTasksByProject,
    getTaskById,
    updateTask,
    deleteTask,
    assignTask,
} = require("../controllers/task.controller");

const auth = require("../middlewares/auth.middleware");

// Create Task
router.post("/", auth, createTask);

// Get All Tasks
router.get("/", auth, getAllTasks);

// Get Tasks By Project
router.get("/project/:projectId", auth, getTasksByProject);

// Get Task By ID
router.get("/:id", auth, getTaskById);

// Update Task
router.patch("/:id", auth, updateTask);

// Delete Task
router.delete("/:id", auth, deleteTask);

// Assign Task
router.patch("/:id/assign", auth, assignTask);

module.exports = router;