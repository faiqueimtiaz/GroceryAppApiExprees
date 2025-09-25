import pkg from "pg";

import { configDotenv } from "dotenv";

configDotenv();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("Database connected");
});

export default pool;
