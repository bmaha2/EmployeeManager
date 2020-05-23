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
    let sql = "SELECT  d.dept_name AS DEPARTMENT FROM employee e LEFT JOIN role r ON e.id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m on m.id = e.manager_id group by d.dept_name";

    return departmentQuery = new Promise((resolve, reject) => {
      let departments = [];
      connection.query(sql, function (err, data) {
        if (err) reject(err);
        Object.values(data).forEach(d => {
          departments.push(d.DEPARTMENT);
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
    return inquirer.prompt(questions.addEmployee)
      .then(answers => {
        //console.log(answers);
        let p1 = new Promise(function (resolve, reject) {
          let sql = `INSERT INTO employee(first_name, last_name) VALUES("${answers.first_name}","${answers.last_name}")`;
          connection.query(sql, function (err, data) {
            if (err) reject(err);
            //console.log(data);
            resolve(data);
          });
        }).catch(err => {
          throw (err);
        })
        let p2 = new Promise(function (resolve, reject) {
          let sql = `INSERT INTO role(title, salary, department_id) VALUES ("${answers.title}", ${answers.salary},${answers.department_id})`;
          connection.query(sql, function (err, data) {
            if (err) reject(err);
            //console.log(data);
            resolve(data);
          });
        }).catch(err => {
          throw (err);
        })
        let p3 = new Promise(function (resolve, reject) {
          let sql = `INSERT INTO department(dept_name) VALUES("${answers.department}")`;
          connection.query(sql, function (err, data) {
            if (err) reject(err);
            //console.log(data);
            resolve(data);
          });
        }).catch(err => {
          throw (err);
        })
        return Promise.all([p1, p2, p3]).then((values)=> {
          console.log((`${answers.first_name} ${answers.last_name} added succesfully!!!!`).green);
         
        });


      });

  },
}

module.exports = employees;