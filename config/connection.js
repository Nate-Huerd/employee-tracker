const mysql = require("mysql2");

require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "employees"
});

// error handling
connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
