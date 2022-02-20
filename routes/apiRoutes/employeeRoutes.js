const express = require('express');
const router = express.Router();
const db = require('../../config/connection');

// GET all employees
// WHEN I choose to view all employees
/*router.get('/employee', (req, res) => {
    const sql = `SELECT employees, *, `
    // figure out what's next
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
};*/



// WHEN I choose to add an employee
/* router.post('/employees')*/