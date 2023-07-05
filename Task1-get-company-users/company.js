const mysql = require("mysql");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6630539",
  password: "wcIUa7PbYx",
  database: "sql6630539",
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

const mquery = "select userName from user where companyId=?";
function my_fun(companyId) {
    return new Promise((resolve, reject) => {
      connection.query(mquery, [companyId], (error, results) => {
        if (error) {
          console.log('Error');
          reject(error); 
          return;
        }
        resolve(results);
      });
    });
  }

app.use(express.json());

app.post("/getusers", async(req, res) => {
  const id = req.body.companyId;
  result = await my_fun(id);
  res.send(result);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
