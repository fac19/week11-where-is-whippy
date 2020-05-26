const path = require("path")
const fs = require("fs")
const db = require("./connection")

const initSql = fs.readFileSync(path.join(__dirname, "init.sql"), "utf-8")

function build() {
  return db.query(initSql)
}

// if (require.main === module) build(); // Calls build function only if this file is invoked from command line 
// If want to invoke from another file use require.main !== module
if (require.main === module) {
  console.log(`db reinitializing from command line. Entry point: ${require.main.filename}`)
  console.log(`Please wait...`)
  build()
}

module.exports = build 
