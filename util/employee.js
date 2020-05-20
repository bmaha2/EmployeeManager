const connection = require('./connection');

const employees = {
  all: function(){
    const sql = "SELECT * FROM employee";

    return new Promise(function(resolve, reject){
      connection.query(sql, function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    })
  },


}

module.exports = employees;