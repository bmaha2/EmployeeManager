
const connection = require("./util/connection");
const figlet = require('figlet');
const menu = require("./util/menu");
const inquirer = require("inquirer");
const table = require("console.table");

const employees = require("./util/employee");

const printTable = (data) => {
  console.table(data);
  choices();
}

const error = (err) => {
  console.log(err);
}

figlet('Employee Manager', function (err, banner) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(banner);
})
function choices() {
  inquirer.prompt(menu)
    .then(answers => {
      if (answers.listing === "View All Employees") {
        employees.all()
          .then(printTable)
          .catch(error);
      } else if (answers.listing === "View All Employees By Department") {
        employees.viewEmployeesByDepartment()
          
            .then(printTable)
            .catch(error);

      }
      else if (answers.listing === "View All Employees By Manager") {
        employees.viewEmployeesByManager()
          .then(printTable)
          .catch(error);
      }
      else if (answers.listing === "Add Employee") {
        employees.addEmployee()
          .then(printTable)
          .catch(error);
      }
      else if (answers.listing === "Remove Employee") {
        employees.removeEmployee()
          .then(printTable)
          .catch(error);
      }
      else if (answers.listing === "Update Employee") {
        employees.updateEmployee()
          .then(printTable)
          .catch(error);
      }
      else if (answers.listing === "Update Employee Manager") {
        employees.updateEmployeeManager()
          .then(printTable)
          .catch(error());
      }
      else {
        console.log("Exiting......")
        connection.end();
      }
    })
}
choices();