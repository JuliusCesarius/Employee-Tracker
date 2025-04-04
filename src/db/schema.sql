-- TODO: Create a database named employee_tracker if it doesn't exist

-- TODO: Drop existing tables in correct order (consider foreign key constraints)

-- TODO: Create department table with:
--   - id (SERIAL PRIMARY KEY)
--   - name (VARCHAR(30), UNIQUE, NOT NULL)

-- TODO: Create role table with:
--   - id (SERIAL PRIMARY KEY)
--   - title (VARCHAR(30), UNIQUE, NOT NULL)
--   - salary (DECIMAL, NOT NULL)
--   - department_id (INTEGER, NOT NULL, FOREIGN KEY)

-- TODO: Create employee table with:
--   - id (SERIAL PRIMARY KEY)
--   - first_name (VARCHAR(30), NOT NULL)
--   - last_name (VARCHAR(30), NOT NULL)
--   - role_id (INTEGER, NOT NULL, FOREIGN KEY)
--   - manager_id (INTEGER, FOREIGN KEY, can be NULL)
