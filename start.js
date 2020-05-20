const figlet = require('figlet');
const menu = require("./menu");
const inquirer = require("inquirer");
const table = require("console.table");
const connection = require("./connection");
const employees = require("./employee");




var printTable = (data )=>{
  console.table(data);
  choices();
}

var error = (err) => {
  console.log(err);
}

figlet('Employee Manager', function (err, banner) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(banner)

})
function choices() {
  inquirer.prompt(menu)
    .then(answers => {
      if (answers.listing === "View All Employees") {
        employees.all()
          .then(printTable)
          .catch(error);
      } else if (answers.listing === "View All Employees By Departments") {
        employees.viewByDepartment()
          .then(printTable)
          .catch(error);

      }
      else if (answers.listing === "View All Employees By Manager") {
        employees.viewByManager()
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