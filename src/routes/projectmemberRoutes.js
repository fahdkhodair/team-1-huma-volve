const express = require('express');
const router = require('express');
const { protect } = require('../middleware/authMiddleware.js');
const { addMember, removeMember } = require('../controllers/projectmembercontroller.js');
const { authMiddleware, projectPermissionMiddleware } = require('../middleware/projectPermissionMiddleware.js');
const router = express.Router();
router.post('/Lid/members',authMiddleware,projectPermissionMiddleware(['owner']), protect, addMember);
router.delete('/:id/members/:userId', authMiddleware, projectPermissionMiddleware(['owner']), protect, removeMember);
module.exports = router;
