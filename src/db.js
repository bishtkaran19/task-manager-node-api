const mysql = require("mysql2");

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // default MySQL user
  password: "P@d@m1976", // MySQL password
  database: "taskdb"
});

// connect to database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("MySQL connected successfully");
});

module.exports = db;