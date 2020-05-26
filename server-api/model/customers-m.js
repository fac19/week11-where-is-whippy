const db = require("../db/connection")

function getAllCustomers() {
  return db.query(`SELECT * FROM customers;`).then((results) => results.rows)
}

function getCustomer(email) {
  console.log("getCustomer -> email", email)
  return db
    .query(`SELECT * FROM customers WHERE email=($1)`, [email])
    .then((user) => user.rows[0])
    .catch((error) => error)
}

function getSpecificCustomer(id) {
  return db
    .query(`SELECT * FROM customers WHERE id=($1)`, [id])
    .then((user) => user.rows[0])
    .catch((error) => error)
}

function createCustomer(newCustomer) {
  return db.query(
    `INSERT INTO customers(name, email, password, username, age, gender, icecream_flavour) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, name, password;`,
    [
      newCustomer.name,
      newCustomer.email,
      newCustomer.password,
      newCustomer.username,
      newCustomer.age,
      newCustomer.gender,
      newCustomer.icecreamFlavour,
    ]
  )
}

module.exports = {
  getAllCustomers,
  getCustomer,
  getSpecificCustomer,
  createCustomer,
}
