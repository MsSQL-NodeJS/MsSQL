const express = require("express");
require("dotenv").config();
const { getConnection } = require("./module/db");
const app = express();
app.use(express.json());
const createTables = async () => {
  try {
    const pool = await getConnection();
    const result = await pool.query(`CREATE TABLE users (
      id int NOT NULL PRIMARY KEY,
      First_Name varchar(50) NOT NULL,
      Last_Name varchar(50) NOT NULL,
      City varchar(50) NOT NULL,
      Email varchar(100) NOT NULL,
      Phone_Number varchar(20) NOT NULL,
      Registration_Date date NOT NULL)`);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// createTables();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
