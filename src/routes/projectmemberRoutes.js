const express = require('express');
const { protect } = require('../middleware/authMiddleware.js');
const { addMember, removeMember } = require('../controllers/projectmembercontroller.js');
const { authMiddleware, projectPermissionMiddleware } = require('../middleware/projectPermissionMiddleware.js');
const {validate} = require('../middleware/validate.js');
const router = express.Router();
router.post('/id/members',authMiddleware,validate,projectPermissionMiddleware(['owner']), protect, addMember);
router.delete('/:id/members/:userId', authMiddleware,validate, projectPermissionMiddleware(['owner']), protect, removeMember);
module.exports = router;
