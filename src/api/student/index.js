// Students related routes
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getAllStudents);
router.post('/', controller.createStudent);

module.exports = router;