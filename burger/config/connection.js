var mysql = require("mysql");

exports.connection = 
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "queenof7",
  database: "burgers_db"
});