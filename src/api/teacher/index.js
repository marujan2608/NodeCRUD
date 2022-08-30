const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getAllTeachers);

module.exports = router;