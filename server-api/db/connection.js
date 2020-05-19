const pg = require("pg");
const dontenv = require("dotenv");

dontenv.config();

const db = new pg.Pool({
  // connectionString: process.env.DATABASE_URL
});

module.exports = db;
