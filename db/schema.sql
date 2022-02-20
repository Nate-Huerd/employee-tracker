/* DROP TABLE IF EXISTS ; */

CREATE TABLE department (
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

/* why is role not white? */
CREATE TABLE role (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAl,
  department_id INTEGER,
  CONSTRAINT
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT
      FOREIGN KEY (role_id)
      REFERENCES role(id)
      ON DELETE SET NULL
);