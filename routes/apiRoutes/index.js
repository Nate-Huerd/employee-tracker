const express = require('express');
const inquirer = require('inquirer');
const router = express.Router();

router.use(require('./employeeRoutes'));
router.use(require('./departmentRoutes'));
router.use(require('./roleRoutes'));


module.exports = router;