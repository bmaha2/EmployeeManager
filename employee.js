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

//   create: function(name, age, sex, fixed){
//     const sql = `INSERT INTO cats (pet_name, pet_age, pet_sex, desexed) VALUES (?, ?, ?, ?)`;

//     return new Promise(function(resolve, reject){
//       connection.query(sql, [name, age, sex, fixed], function(err, data) {
//         if (err) reject(err);
//         resolve(data);
//       });
//     })
//   },

//   update: function(desexed, id){
//     const sql = `UPDATE cats SET desexed = ? WHERE id = ?`;

//     return new Promise(function(resolve, reject){
//       connection.query(sql, [desexed, id], function(err, data) {
//         if (err) reject(err);
//         resolve(data);
//       });
//     })
//   },

//   destroy: function(id){
//     const sql = `DELETE FROM cats WHERE id = ?`;

//     return new Promise(function(resolve, reject){
//       connection.query(sql, [id], function(err, data) {
//         if (err) reject(err);
//         resolve(data);
//       });
//     })
//   }
}

module.exports = employees;