const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createproject, getproject, getprojects, updateProject, deleteproject } = require('../controllers/projectController');
router.post('/', protect, createproject);
router.get('/', protect, getprojects);
router.get('/:id', protect, getproject);
router.patch('/:id', protect, updateProject);
router.delete('/:id', protect, deleteproject);
module.exports = {
    createproject,
    getproject,
    getprojects,
    updateProject,
    deleteproject
};