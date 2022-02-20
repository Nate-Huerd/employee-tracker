const express = require('express');
const inquirer = require('inquirer');
const router = express.Router();
const db = require('../../config/connection');

// GET all employees
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

//employee info
router.get('/employee', (req, res) => {
const sql = `SELECT * FROM employees`;

// employee department
router.get('/employee:department_id', (req, res) => {
  const sql = `SELECT employees.*, departments.name
                AS department_name
                FROM employees
                LEFT JOIN departments
                ON employees.department_id = departments_id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});



// WHEN I choose to add an employee
/* router.post('/employees')*/