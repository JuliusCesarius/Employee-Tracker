const inquirer = require('inquirer');

const mainMenuPrompt = {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
    ]
};

const addDepartmentPrompt = {
    // TODO: Create add department prompt object
    // - Should ask for department name
    // - Should validate that department name is not empty
};

const addRolePrompts = (departments) => [
    // TODO: Create add role prompts array
    // - Should ask for role title and validate that it is not empty
    // - Should ask for salary and validate that it is a number greater than 0
    // - Should ask to select department from list
];

const addEmployeePrompts = (roles, employees) => [
    // TODO: Create add employee prompts array
    // - Should ask for first name
    // - Should ask for last name
    // - Should ask to select role from list
    // - Should ask to select manager from list (including 'None' option)
];

const updateEmployeeRolePrompts = (employees, roles) => [
    // TODO: Create update employee role prompts array
    // - Should ask to select employee from list
    // - Should ask to select new role from list
];

module.exports = {
    // TODO: Export all prompt objects/arrays
    mainMenuPrompt,
    addDepartmentPrompt,
    addRolePrompts,
    addEmployeePrompts,
    updateEmployeeRolePrompts
}; 