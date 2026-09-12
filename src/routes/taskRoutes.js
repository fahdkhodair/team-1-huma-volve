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
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

// Create Task
router.post("/", authMiddleware, createTask);

// Get All Tasks
router.get("/", authMiddleware, getAllTasks);

// Get Tasks By Project
router.get("/project/:projectId", authMiddleware, getTasksByProject);

// Get Task By ID
router.get("/:id", authMiddleware, getTaskById);

// Update Task
router.patch("/:id", authMiddleware, updateTask);

// Delete Task
router.delete("/:id", authMiddleware, deleteTask);

// Assign Task
router.patch("/:id/assign", authMiddleware, assignTask);

module.exports = router;