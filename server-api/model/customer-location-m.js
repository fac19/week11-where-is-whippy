const db = require("../db/connection");

function addCustomerLocation(customer_id, latitude, longitude, temperature) {
  return db.query(
    `INSERT INTO customer_location (customer_id, latitude, longitude, temperature) VALUES ($1, $2, $3, $4);`,
    [customer_id, latitude, longitude, temperature]
  );
}

module.exports = { addCustomerLocation };
