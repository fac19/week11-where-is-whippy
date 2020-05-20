const db = require("../db/connection")

function addCustomerLocation(customer_id, latitude, longitude, temperature) {
  return db.query(
    `INSERT INTO customer_location (customer_id, latitude, longitude, temperature) VALUES ($1, $2, $3, $4);`,
    [customer_id, latitude, longitude, temperature]
  )
}

function getAllCustomerLocations(conditionals) {
  return db
    .query(`SELECT * FROM customer_location VALUES($1);`, [conditionals])
    .then((results) => results.rows)
}

module.exports = { addCustomerLocation, getAllCustomerLocations }
