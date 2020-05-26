const pg = require("pg")
const dontenv = require("dotenv")
dontenv.config()

const db = new pg.Pool({
  // Not 100% sure what this is doing
  connectionString: process.env.DATABASE_URL,
})

module.exports = db
