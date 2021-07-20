const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  // Port Connection
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Bootcamp123@@",
  database: "employee_DB",
});


connection.connect((err) => {

if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
});

