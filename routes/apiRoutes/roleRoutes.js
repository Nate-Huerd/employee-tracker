const express = require('express');
const inquirer = require('inquirer');
const router = express.Router();
const db = require('./config/connection');

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
router.get('/role', (req, res) => {
  const sql = `SELECT * FROM roles`;

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

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
router.post('/roles', ({ body }, res) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?,?)`;
    const params = [
      body.title,
      body.salary,
      body.department_id
    ];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

module.exports = router;
