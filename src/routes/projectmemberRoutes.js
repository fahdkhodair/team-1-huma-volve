const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addMember, removeMember } = require('../controllers/projectmembercontroller');
const { authMiddleware, projectPermissionMiddleware } = require('../middleware/projectPermissionMiddleware');

router.post('/Lid/members',authMiddleware,projectPermissionMiddleware(['owner']), protect, addMember);
router.delete('/:id/members/:userId', authMiddleware, projectPermissionMiddleware(['owner']), protect, removeMember);

module.exports = {
    addMember,
    removeMember
};
