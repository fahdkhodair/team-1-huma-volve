const Task = require("../models/Task");
const Project = require("../models/Project");
const User = require("../models/User");

// Create Task
exports.createTask = async (req, res) => {
  const { project, member, title, description, status, priority } = req.body;

  const projectExists = await Project.findById(project);

  if (!projectExists) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  const userExists = await User.findById(member);

  if (!userExists) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isMember = projectExists.members?.some((item) => {
    const memberId = item.user || item;
    return memberId.toString() === member.toString();
  });

  if (!isMember) {
    return res.status(403).json({
      message: "User is not a member of this project",
    });
  }

  const task = await Task.create({
    project,
    member,
    title,
    description,
    status,
    priority,
  });

  res.status(201).json(task);
};

// Get All Tasks
exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find()
    .populate("project")
    .populate("member");

  res.json(tasks);
};

// Get Tasks By Project
exports.getTasksByProject = async (req, res) => {
  const project = await Project.findById(req.params.projectId);

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  const tasks = await Task.find({
    project: req.params.projectId,
  })
    .populate("member")
    .populate("project");

  res.json(tasks);
};

// Get Task By ID
exports.getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id)
    .populate("project")
    .populate("member");

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.json(task);
};

// Update Task
exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const { member, project } = req.body;

  // Check new member
  if (member) {
    const userExists = await User.findById(member);

    if (!userExists) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const projectId = project || task.project;

    const projectExists = await Project.findById(projectId);

    if (!projectExists) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const isMember = projectExists.members?.some((item) => {
      const memberId = item.user || item;
      return memberId.toString() === member.toString();
    });

    if (!isMember) {
      return res.status(403).json({
        message: "User is not a member of this project",
      });
    }
  }

  Object.assign(task, req.body);

  await task.save();

  res.json(task);
};

// Delete Task
exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  await task.deleteOne();

  res.json({
    message: "Task deleted successfully",
  });
};

// Assign Task
exports.assignTask = async (req, res) => {
  const { member } = req.body;

  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const user = await User.findById(member);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const project = await Project.findById(task.project);

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  const isMember = project.members?.some((item) => {
    const memberId = item.user || item;
    return memberId.toString() === member.toString();
  });

  if (!isMember) {
    return res.status(403).json({
      message: "User is not a member of this project",
    });
  }

  task.member = member;

  await task.save();

  res.json({
    message: "Task assigned successfully",
    task,
  });
};