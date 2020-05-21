const db = require("../db/connection")

function getAllVendors() {
  return db.query(`SELECT * FROM vendors;`).then((results) => results.rows)
}

function getUser(email) {
  return db
    .query(`SELECT * FROM vendors WHERE email=($1)`, [email])
    .then((user) => user.rows[0])
    .catch((error) => error)
}

function createVendor(vendor) {
  // console.log("createVendor -> vendor", vendor)
  return db
    .query(
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
    .then(() => {
      return getUser(vendor.email)
    })
    .catch((error) => error)
}

module.exports = { createVendor, getAllVendors }
