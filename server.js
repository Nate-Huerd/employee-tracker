const express = require('express');
const db = require('./config/connection');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// get user input
function employerSearch() {
  inquirer.prompt({
    type: "select",
    message: "What do you want to do?",
    name: "actionlist",
    // WHEN I start the application
    // THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee Role",
      "None of the Above"
    ]
  }).then(function(answer) {
    switch (answer.action) {
      case "View All Departments":
        viewAllDepartments();
        break;

      case "View All Roles":
        viewAllRoles();
        break;

      case "View All Employees":
        viewAllEmployees();
        break;

      case "Add a Department":
        addDepartment();
        break;

      case "Add a Role":
        addRole();
        break;

      case "Add an Employee":
        addEmployee();
        break;

      case "Update an Employee Role":
        updateEmployeeRole();
        break;

      case "None of the Above":
        connection.end();
        break;
    }
  });
}

// write functions to route the user to the correct table