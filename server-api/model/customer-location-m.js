const db = require("../db/connection")

function getAllCustomerLocations() {
  return db
    .query(`SELECT * FROM customer_location;`)
    .then((results) => results.rows)
}

function addNewCustomerLocation(customer_id, latitude, longitude, temperature) {
  return db.query(
    `INSERT INTO customer_location (customer_id, latitude, longitude, temperature) VALUES ($1, $2, $3, $4) RETURNING customer_id, latitude, longitude, temperature;`,
    [customer_id, latitude, longitude, temperature]
  )
}

module.exports = { getAllCustomerLocations, addNewCustomerLocation }
