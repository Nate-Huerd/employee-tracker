const express = require('express');
const inquirer = require('inquirer');
const router = express.Router();
const db = require('./config/connection');

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
router.get('/department', (req, res) => {
  const sql = `SELECT * FROM departments`;

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

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
router.post('/departments', ({ body }, res) => {
    const sql = `INSERT INTO departments (name) VALUES (?,?,?,?)`;
    const params = [
      body.name
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
