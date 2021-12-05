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
console.log(process.env);
const devConfig: Config = {
  password: process.env.ANTHONY_PG_PASSWORD,
  user: process.env.ANTHONY_USER,
  host: process.env.ANTHONY_HOST,
  port: process.env.ANTHONY_PORT,
  database: process.env.ANTHONY_DB,
};

const pool = new Pool(devConfig);
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

module.exports = pool;
