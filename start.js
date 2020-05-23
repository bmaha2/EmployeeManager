
const figlet = require('figlet');
const connection = require("./util/connection");
const questions = require("./util/questions");
const inquirer = require("inquirer");
const table = require("console.table");
const employees = require("./util/employee");
const colors = require("colors");

const displayMenu = (data) => {
  console.table(data);
  console.log(("=============================================================================================").green);
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
  console.log(banner.blue);
})
function choices() {
  inquirer.prompt(questions.menu)
    .then(answers => {
      if (answers.listing === "View All Employees") {
        employees.all()
          .then(displayMenu)
          .catch(error);
      } else if (answers.listing === "View All Employees By Department") {
        employees.viewEmployeesByDepartment()
            .then(displayMenu)
            .catch(error);

      }
      else if (answers.listing === "View All Employees By Manager") {
        employees.viewEmployeesByManager()
          .then(displayMenu)
          .catch(error);
      }
      else if (answers.listing === "Add Employee") {
        employees.addEmployee()
          .then(displayMenu)
          .catch(error);
      }
      else if (answers.listing === "Remove Employee") {
        employees.removeEmployee()
          .then(displayMenu)
          .catch(error);
      }
      else if (answers.listing === "Update Employee") {
        employees.updateEmployee()
          .then(displayMenu)
          .catch(error);
      }
      else if (answers.listing === "Update Employee Manager") {
        employees.updateEmployeeManager()
          .then(displayMenu)
          .catch(error());
      }
      else {
        console.log("Exiting......")
        connection.end();
      }
    })
}
choices();