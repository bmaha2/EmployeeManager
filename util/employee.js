const connection = require('./connection');
const inquirer = require("inquirer");
const questions = require("./questions");
const table = "SELECT  e.id AS EMP_ID, e.first_name AS FIRST_NAME, e.last_name AS LAST_NAME, r.title AS TITLE, r.salary AS SALARY, d.dept_name AS DEPARTMENT,CONCAT(m.first_name, ' ' , m.last_name) AS Manager FROM employee e LEFT JOIN role r ON e.id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m on m.id = e.manager_id";
const order = "ORDER BY EMP_ID";
const colors = require("colors");
const employees = {

  all: function () {
    let sql = `${table} ${order}`;
    return new Promise(function (resolve, reject) {
      connection.query(sql, function (err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  viewEmployeesByDepartment: function () {
    let sql = "SELECT dept_name from department";

    return departmentQuery = new Promise((resolve, reject) => {
      let departments = [];
      connection.query(sql, function (err, data) {
        if (err) reject(err);
        Object.values(data).forEach(d => {
          departments.push(d.dept_name);
          resolve(departments);
        })
      })
    }).then((departments) => {

      return inquirer.prompt({
        type: 'rawlist',
        name: 'department',
        message: 'Select department to view its employees',
        choices: departments
      }).then(answers => {
        let data = answers.department;
        return new Promise(function (resolve, reject) {
          sql = `${table} where d.dept_name = ? `;
          connection.query(sql, [data], function (err, data) {
            if (err) reject(err);
            resolve(data);
          });
        }).catch(err => {
          throw (err);
        });
      })
    })
  },

  viewEmployeesByManager: function () {
    let sql = "SELECT  CONCAT(m.first_name, ' ' , m.last_name) AS Manager FROM employee e LEFT JOIN employee m on m.id = e.manager_id where e.manager_id IS NOT NULL group by e.manager_id";

    return managerQuery = new Promise((resolve, reject) => {
      let managers = [];
      connection.query(sql, function (err, data) {

        if (err) reject(err);
        Object.values(data).forEach(v => {
          managers.push(v.Manager);
          resolve(managers);
        })
      })
    }).then((managers) => {
      return inquirer.prompt({
        type: 'rawlist',
        name: 'manager',
        message: "List of Managers",
        choices: managers
      }).then(answers => {
        return new Promise(function (resolve, reject) {
          let data = answers.manager
          sql = `${table} where CONCAT(m.first_name, ' ' , m.last_name) = ? `;
          connection.query(sql, [data], function (err, data) {
            if (err) reject(err);
            resolve(data);
          });
        }).catch(err => {
          throw (err);
        });
      })
    })
  },
  addEmployee: function () {

    return new Promise(function (resolve1, reject1) {
      let sql = " SELECT  id, title from role ";
      return connection.query(sql, function (err, data) {
        if (err) throw err;
        //console.log(data);
        return inquirer.prompt(questions.addEmployee(data))
          .then(answers => {
            //console.log(answers);
            return new Promise(function (resolve, reject) {
              let sql = `INSERT INTO employee(first_name, last_name, role_id) VALUES("${answers.first_name}","${answers.last_name}","${answers.title}")`;
              connection.query(sql, function (err, data) {
                if (err) reject1(reject(err));
                console.log((`${answers.first_name} ${answers.last_name} successfully added`).green);
                resolve1(resolve(data));
              });
            }).catch(err => {
              throw (err);
            })
          });
      })
    })
  },
  removeEmployee: function () {
    let sql = "SELECT CONCAT(employee.first_name, employee.last_name) as employee FROM employee";
    return employeeQuery = new Promise((resolve, reject) => {
      let employeeList = [];

      connection.query(sql, function (err, data) {
        if (err) reject(err);
        Object.values(data).forEach(v => {
          employeeList.push(v.employee);
          resolve(employeeList);
        })
      })
    }).then((employeeList) => {
      //console.log(employeeList);
      return inquirer.prompt({
        type: 'rawlist',
        name: 'employee',
        message: "Select from list to delete an employee",
        choices: employeeList
      }).then(answers => {
        return new Promise(function (resolve, reject) {
          let data = answers.employee
          sql = `DELETE FROM employee WHERE employee.manager_id = null OR CONCAT(first_name,'', last_name) = ?`
          connection.query(sql, [data], function (err, data) {
           if (err) reject(err);
            resolve(data);
            console.log((`${answers.employee} succesfully deleted`).red);
          });
        }).catch(err => {
          throw (err);
        });
      })
    });


  },
  updateEmployee: function () {

  },
  updateEmployeeManager: function () {

  }
}

module.exports = employees;