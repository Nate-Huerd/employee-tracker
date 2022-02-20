const express = require('express');
const inquirer = require('inquirer');
const router = express.Router();
const db = require('./config/connection');




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
