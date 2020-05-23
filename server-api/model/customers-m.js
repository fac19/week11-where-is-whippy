const db = require("../db/connection")

function getAllCustomers() {
  return db.query(`SELECT * FROM customers;`).then((results) => results.rows)
}

function getCustomer(email) {
  return db
    .query(`SELECT * FROM customers WHERE email=($1)`, [email])
    .then((user) => user.rows[0])
    .catch((error) => error)
}

function createCustomer(customer) {
  return db.query(
    `INSERT INTO customers(name, email, password, username, age, gender, icecream_flavour) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, name, password;`,
    [
      customer.name,
      customer.email,
      customer.password,
      customer.username,
      customer.age,
      customer.gender,
      customer.icecreamFlavour,
    ]
  )
}

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
}
