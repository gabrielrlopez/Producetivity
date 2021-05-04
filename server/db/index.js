const mysql = require("mysql");

//Create database connection
const pool = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "producetivity",
});

let producetivityDb = {};

producetivityDb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM producetivity.produce`, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

producetivityDb.filter = (searchTerm) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM producetivity.produce WHERE product LIKE "%${searchTerm}%"`,
      (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      }
    );
  });
};

module.exports = producetivityDb;
