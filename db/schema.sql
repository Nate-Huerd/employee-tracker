/* DROP TABLE IF EXISTS ; */
DROP TABLE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE departments (
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAl,
  department_id INTEGER,
  CONSTRAINT
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT
      FOREIGN KEY (role_id)
      REFERENCES role(id)
      ON DELETE SET NULL
);