const connection = require('./connection');
const inquirer = require("inquirer");
const employees = {

  all: function () {
    const sql = "SELECT  e.id, e.first_name, e.last_name, r.title, r.salary, d.dept_name, e.manager_id FROM employee as e LEFT JOIN role as r ON e.id = r.id LEFT JOIN department as d ON r.department_id = d.id";
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
        sql = "SELECT  e.id, e.first_name, e.last_name, r.title, r.salary, d.dept_name, e.manager_id FROM employee as e INNER JOIN role as r ON e.id = r.id LEFT JOIN department as d ON r.department_id = d.id where d.dept_name = ? ";
        connection.query(sql, [data], function (err, data) {
          if (err) reject(err);
          resolve(data);
        });
      })
        .catch(err => {
          throw (err);
        });
    })
  },
  viewEmployeesByManager: function() {
    const sql = "SELECT  e.id, e.first_name, e.last_name, r.title, r.salary, d.dept_name, e.manager_id FROM employee as e LEFT JOIN role as r ON e.id = r.id LEFT JOIN department as d ON r.department_id = d.id";
    return new Promise(function (resolve, reject) {
      connection.query(sql, function (err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })

  }
};

module.exports = employees;