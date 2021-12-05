const { Pool } = require("pg");
require("dotenv").config();

// Create a config for every collaborater (diff for each local machine)
// Anthony's config
interface Config {
  password: string;
  user: string;
  host: string;
  port: string;
  database: string;
}

const devConfig: Config = {
  password: process.env.ANTHONY_PG_PASSWORD || "1235",
  user: process.env.ANTHONY_USER || "postgres",
  host: process.env.ANTHONY_HOST || "localhost",
  port: process.env.ANTHONY_PORT || "5432",
  database: process.env.ANTHONY_DB || "bcrypto",
};

const pool = new Pool(devConfig);
pool.connect((err: Error): void => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

module.exports = pool;
