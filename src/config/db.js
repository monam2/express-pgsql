import pkg from "pg";
const { Pool } = pkg;

const pool = new pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT,
});

pool.on("connect", () => {
  console.log("Connection pool establised with DB");
});

export default pool;
