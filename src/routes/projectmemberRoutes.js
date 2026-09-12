const express = require('express');
const { addMember, removeMember } = require('../controllers/projectmembercontroller.js');
const { projectPermissionMiddleware } = require('../middleware/projectPermissionMiddleware.js');
const {validate} = require('../middleware/validateMiddleware.js');
const router = express.Router();
router.post('/id/members',validate,projectPermissionMiddleware, addMember);
router.delete('/:id/members/:userId',validate, projectPermissionMiddleware, removeMember);
module.exports = router;
