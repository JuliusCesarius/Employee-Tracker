-- Insert departments
INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
    ('Lead Engineer', 150000, 1),
    ('Software Engineer', 120000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Legal Team Lead', 250000, 3),
    ('Lawyer', 190000, 3),
    ('Sales Lead', 100000, 4),
    ('Salesperson', 80000, 4);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
-- TODO: Implement employee seed data
-- - Should insert multiple employees with:
--   * first_name, last_name, role_id, manager_id
--   * manager_id should be NULL for top-level managers
--   * manager_id should reference another employee for subordinates
--   * first_name, last_name should not be NULL
--   * role_id should reference a role in the role table