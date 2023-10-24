const sql = require("mssql");
const sqlConfig = {
  server: "ANASMERAKI\\SQLEXPRESS",

  user: "sra",
  password: "0000",

  database: "test_sql",
  //   pool: {
  //     max: 10,
  //     min: 0,
  //     idleTimeoutMillis: 30000,
  //   },
  options: {
    // encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};
const getConnection = async () => {
  try {
    await sql.connect(sqlConfig);
    return sql;
  } catch (error) {
    throw error;
  }

  //   const result = await sql.query`select * from test where id = ${value}`
};

module.exports = { getConnection };
