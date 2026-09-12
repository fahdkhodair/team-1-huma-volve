const express = require('express');
const { protect } = require('../middleware/authMiddleware.js');
const { addMember, removeMember } = require('../controllers/projectmembercontroller.js');
const { authMiddleware, projectPermissionMiddleware } = require('../middleware/projectPermissionMiddleware.js');
const {validate} = require('../middleware/validateMiddleware.js');
const router = express.Router();
router.post('/id/members',authMiddleware,validate,projectPermissionMiddleware, protect, addMember);
router.delete('/:id/members/:userId', authMiddleware,validate, projectPermissionMiddleware, protect, removeMember);
module.exports = router;
