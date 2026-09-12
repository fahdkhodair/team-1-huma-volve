const express = require('express');
const router = express.Router();
const   {createproject, getproject, getprojects, updateProject, deleteproject}  = require('../controllers/projectController.js');
router.post('/', createproject);
router.get('/', getprojects);
router.get('/:id', getproject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteproject);
module.exports = router;
