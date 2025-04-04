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