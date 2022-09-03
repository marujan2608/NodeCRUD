const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getAllTeachers);
router.get('/:id',controller.getTeacherById);
router.post('/', controller.createTeacher);
router.post('/add-teachers', controller.createTeachers);
router.patch('/:id', controller.updateTeacher);
router.delete('/:id', controller.deleteTeacher);

module.exports = router;