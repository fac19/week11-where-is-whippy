const db = require("../db/connection");

function getAllCustomerLocations() {
  return db
    .query(`SELECT latitude, longitude FROM customer_location;`)
    .then((results) => results.rows);
}

function addNewCustomerLocation(location) {
  return db.query(
    `INSERT INTO customer_location (customer_id, latitude, longitude, temperature) VALUES ($1, $2, $3, $4) RETURNING customer_id, latitude, longitude, temperature;`,
    [
      location.customerId,
      location.latitude,
      location.longitude,
      location.temperature,
    ]
  );
}

module.exports = { getAllCustomerLocations, addNewCustomerLocation };
