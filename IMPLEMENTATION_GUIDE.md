# Employee Tracker Implementation Guide

## Tech Stack
- Node.js - Runtime environment
- PostgreSQL - Database
- Inquirer.js (v8.2.4) - CLI interface
- pg - PostgreSQL client for Node.js
- dotenv - Environment variable management
- console - Table formatting

## Folder Structure
```
employee-tracker/
├── src/
│   ├── db/             # Database related files
│   │   ├── schema.sql  # Database structure
│   │   ├── seeds.sql   # Sample data
│   │   └── connection.js # Database connection config
│   ├── queries/        # SQL query functions
│   │   ├── department.js
│   │   ├── role.js
│   │   └── employee.js
│   ├── prompts/        # Inquirer prompts
│   │   └── inquirer.js
│   └── utils/          # Helper functions
│       └── display.js  # Console formatting
├── index.js           # Main application
└── .env              # Environment variables
```

## Key Database Concepts

### Tables & Relationships
1. **department**
   - Primary table with no dependencies
   - Referenced by role table

2. **role**
   - Depends on department (foreign key)
   - Referenced by employee table

3. **employee**
   - Depends on role (foreign key)
   - Self-referential for manager (foreign key)

### SQL Concepts Used
- CREATE TABLE - Table creation
- SERIAL - Auto-incrementing IDs
- PRIMARY KEY - Unique identifier
- FOREIGN KEY - Table relationships
- JOIN - Combining table data
- ORDER BY - Sorting results
- INSERT INTO - Adding records
- UPDATE - Modifying records
- SELECT - Retrieving data

## Suggested Implementation Order

### 1. Database Setup
1. Create database schema
   - Create database
   - Drop existing tables
   - Create department table
   - Create role table
   - Create employee table

2. Create seed data
   - Insert departments
   - Insert roles
   - Insert employees

### 2. Basic Queries
1. Department queries
   - getAllDepartments
   - addDepartment
   - getDepartmentById

2. Role queries
   - getAllRoles
   - addRole

3. Employee queries
   - getAllEmployees
   - addEmployee
   - updateEmployeeRole
   - getEmployeeById

### 3. User Interface
1. Inquirer prompts
   - Department prompts
   - Role prompts
   - Employee prompts
   - Update prompts

2. Main menu implementation
   - View operations
   - Add operations
   - Update operations

### 4. Bonus Features
1. Additional employee operations
   - Update employee manager
   - View by manager
   - View by department

2. Delete operations
   - Delete departments
   - Delete roles
   - Delete employees

3. Department budget calculation
   - Sum employee salaries by department

## Implementation Tips

1. **Database First**: Complete schema.sql before writing any JavaScript code

2. **Test Each Query**: Test SQL queries in PostgreSQL client before implementing in Node.js

3. **Modular Development**: 
   - Complete one feature at a time
   - Test each feature before moving to next
   - Start with viewing data, then add, then update

4. **Error Handling**:
   - Add try/catch blocks around database operations
   - Validate user input before database operations
   - Handle foreign key constraints

5. **Code Organization**:
   - Keep SQL queries in query files
   - Keep prompts separate from business logic
   - Use async/await for database operations

## Common Gotchas
1. Foreign key constraints when deleting records
2. Self-referential manager relationship in employee table
3. Null handling for employee managers
4. Input validation for salaries and IDs
5. Proper order of operations for seeds.sql

## Testing Checklist
- [ ] Database creates successfully
- [ ] Seed data inserts without errors
- [ ] Can view all departments
- [ ] Can view all roles
- [ ] Can view all employees
- [ ] Can add department
- [ ] Can add role
- [ ] Can add employee
- [ ] Can update employee role
- [ ] No errors when viewing empty tables
- [ ] Proper error messages for invalid inputs 

## Development Environment Setup

### 1. PostgreSQL Installation
1. **Download and Install PostgreSQL**
   - Visit [PostgreSQL Downloads](https://www.postgresql.org/download/)
   - Choose your operating system
   - Download and run the installer
   - Remember the password you set for the postgres user
   - Default port is 5432

2. **PostgreSQL GUI Client (Optional but recommended)**
   - Install [pgAdmin](https://www.pgadmin.org/download/) or
   - Install [DBeaver](https://dbeaver.io/download/) (Multi-database tool)

### 2. Node.js Setup
1. **Install Node.js**
   - Visit [Node.js Downloads](https://nodejs.org/)
   - Download and install LTS version
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

### 3. Project Setup
1. **Initialize Project**
   ```bash
   # Create project directory
   mkdir employee-tracker
   cd employee-tracker

   # Initialize npm project
   npm init -y
   ```

2. **Install Dependencies**
   ```bash
   # Install required packages
   npm install inquirer@8.2.4 pg dotenv console
   ```

3. **Configure Environment**
   ```bash
   # Create .env file
   touch .env

   # Add to .env:
   DB_USER=your_username
   DB_HOST=localhost
   DB_NAME=employee_tracker
   DB_PASSWORD=your_password
   DB_PORT=5432
   ```

### 4. Database Setup
1. **Create Database**
   ```sql
   -- Using psql command line:
   psql -U postgres
   CREATE DATABASE employee_tracker;
   \c employee_tracker

   -- Or using pgAdmin/DBeaver:
   -- Right click on Databases > Create > Database
   -- Name it 'employee_tracker'
   ```

2. **Run Schema**
   ```bash
   # Using psql:
   psql -U postgres -d employee_tracker -f src/db/schema.sql

   # Or using pgAdmin/DBeaver:
   # Open and execute schema.sql
   ```

3. **Load Sample Data**
   ```bash
   # Using psql:
   psql -U postgres -d employee_tracker -f src/db/seeds.sql

   # Or using pgAdmin/DBeaver:
   # Open and execute seeds.sql
   ```

### 5. Verify Setup
1. **Test Database Connection**
   ```bash
   # Using psql
   psql -U postgres -d employee_tracker
   \dt  # List tables
   ```

2. **Test Application**
   ```bash
   # Run the application
   node index.js
   ```

## Common Setup Issues

### PostgreSQL
1. **Connection Refused**
   - Check if PostgreSQL service is running
   - Verify port number
   - Check firewall settings

2. **Authentication Failed**
   - Verify username and password in .env
   - Check pg_hba.conf for authentication settings

3. **Database Does Not Exist**
   - Create database manually
   - Check database name spelling

### Node.js
1. **Module Not Found**
   - Run `npm install`
   - Check package.json
   - Verify node_modules directory exists

2. **Permission Issues**
   - Run terminal as administrator
   - Check file permissions
   - Use sudo for Unix-based systems

### Environment Variables
1. **Connection Error**
   - Verify .env file exists
   - Check variable names match connection.js
   - No quotes around values in .env

[Rest of the implementation guide continues below...] 