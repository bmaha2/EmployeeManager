const connection = require('./connection');
const inquirer = require("inquirer");
const questions = require("./questions");
const table = "SELECT  e.id AS EMP_ID, e.first_name AS FIRST_NAME, e.last_name AS LAST_NAME, r.title AS TITLE, r.salary AS SALARY, d.dept_name AS DEPARTMENT,CONCAT(m.first_name, ' ' , m.last_name) AS Manager FROM employee e LEFT JOIN role r ON e.id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m on m.id = e.manager_id";
const employees = {

  all: function () {
    const sql = table;
    return new Promise(function (resolve, reject) {
      connection.query(sql, function (err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },

  viewEmployeesByDepartment: function () {
    return inquirer.prompt({
      type: 'rawlist',
      name: 'department',
      message: 'Select department to view its employees',
      choices: ["Legal", "Engineering", "Accounting", "Sales"]
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
    return inquirer.prompt(questions.addEmployee)
    .then(answers => {
      console.log(answers);

    });

  },
}

module.exports = employees;