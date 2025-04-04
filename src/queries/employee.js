const pool = require('../db/connection');

const employeeQueries = {

    getAllEmployees: async () => {
        // TODO: Implement getAllEmployees
        // - Should return all employees with:
        //   * employee id, first_name, last_name
        //   * role title, department name, salary
        //   * manager name (NULL if no manager)
        // - Should be ordered by id

    },

    addEmployee: async (firstName, lastName, roleId, managerId) => {
        // TODO: Implement addEmployee
        // - Should accept firstName, lastName, roleId, managerId
        // - Should insert new employee
        // - Should return newly created employee
    },

    updateEmployeeRole: async (employeeId, roleId) => {
        // TODO: Implement updateEmployeeRole
        // - Should accept employeeId and roleId
        // - Should update employee's role
        // - Should return updated employee
    },

    getEmployeeById: async (id) => {
        // TODO: Implement getEmployeeById
        // - Should accept id parameter
        // - Should return single employee or null
    },
};

module.exports = employeeQueries; 