const path = require("path")
const fs = require("fs")
const db = require("./connection")

const initSql = fs.readFileSync(path.join(__dirname, "init.sql"), "utf-8")

function build() {
  return db.query(initSql)
}

function closeDb() {
  return db.end()
}

// if (require.main === module) build(); // calls build only if this file is invoked from command line - if via another file, require.main !== module

module.exports = { build, closeDb}
