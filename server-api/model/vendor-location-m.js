const db = require("../db/connection")

function getAllVendorLocations() {
  return db
    .query(`SELECT * FROM vendor_location;`)
    .then((result) => result.rows)
}

function addNewVendorLocation(vendor_id, latitude, longitude) {
  return db.query(
    `INSERT INTO vendor_location (vendor_id, latitude, longitude) VALUES ($1, $2, $3) RETURNING vendor_id, latitude, longitude;`,
    [vendor_id, latitude, longitude]
  )
}

module.exports = { getAllVendorLocations, addNewVendorLocation }
