const mysql = require("mysql");
require('dotenv').config();


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err);
    return;
  }
  console.log('connected as id ' + connection.threadId);
  //connection.end();
});

module.exports = connection;