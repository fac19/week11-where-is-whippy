const db = require("../db/connection")

function getAllVendors() {
  return db.query(`SELECT * FROM vendors;`).then((results) => results.rows)
}

function createVendor(vendor) {
  console.log("createVendor -> vendor", vendor)
  return db.query(
    `INSERT INTO vendors(name, email, password, mobile, company_name, alcohol, vegan_option) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING name;`,
    [
      vendor.name,
      vendor.email,
      vendor.password,
      vendor.mobile,
      vendor.company_name,
      vendor.alcohol,
      vendor.vegan_option,
    ]
  )
}

module.exports = { createVendor, getAllVendors }
