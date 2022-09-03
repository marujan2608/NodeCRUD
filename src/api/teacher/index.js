const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getAllTeachers);
router.get('/:id',controller.getTeacherById);
router.post('/addTeacher', controller.createTeacher);

module.exports = router;