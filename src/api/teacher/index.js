const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getAllTeachers);
router.post('/addTeacher', controller.createTeacher);

module.exports = router;