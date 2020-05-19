const figlet = require('figlet');
const menu = require("./menu");
const inquirer = require("inquirer");
const table = require("console.table");
var mysql = require("mysql");
 
figlet('Employee Manager', function (err, banner) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(banner)
})


var connection = mysql.createConnection({
    
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "your password",
    database: "employee_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
   
    start();
  });
  

function start() {
    
    inquirer.prompt(menu).then (answers => {
        if (answers.listing === "View All Employees") {
            connection.query("SELECT * FROM employee ", function(err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
                connection.end();
              });
            

        }
    })
}
