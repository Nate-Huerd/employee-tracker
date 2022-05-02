INSERT INTO employees
  (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Clarke', '1'),
  ('Kevin', 'West', '1'),
  ('Amy', 'Kumba', '1'),
  ('Mark', 'Humphries', '1'),
  ('Sandra', 'Williams', '1'),
  ('Angela', 'Monty', '1'),
  ('Kim', 'Brach', '1'),

INSERT INTO roles
  (role_title, role_salary, department_id)
VALUES
  ('manager', '70000', '1'),
  ('administrative assistant', '60000', '2'),
  ('customer service rep', '40000', '3'),
  ('salesman', '50000', '4');

INSERT INTO departments
  (department_id, department_name)
VALUES
  ('1', 'management'),
  ('2', 'administration'),
  ('3', 'customer service'),
  ('4', 'sales');
  