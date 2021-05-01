const express = require("express");
const mysql = require("mysql");

const app = express();

//Create database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "producetivity",
});

//Connect to database
db.connect((err) => {
  if (err) throw err;

  console.log("MySql connected!");
});

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
