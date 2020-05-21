const db = require("../db/connection")

function createVendor(vendor) {
  return db.query(
    `INSERT INTO vendors(name, email, password, mobile, company_name, alcohol, vegan_option) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING name, email, password, mobile, company_name, alcohol, vegan_option`,
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

module.exports = { createVendor }
