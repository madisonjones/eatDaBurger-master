var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection= mysql.createConnection(process.env.JAAWSDB_URL)
} else {
exports.connection = 
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "queenof7",
  database: "burgers_db"
});
}