const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

dotenv.config()
const SECRET = process.env.JWT_SECRET

const vendors = require("../model/vendors-m")

function allVendors(req, res, next) {
  vendors
    .getAllVendors()
    .then((allVendors) => {
      res.send(allVendors)
    })
    .catch(next)
}

function getSpecificVendor(req, res, next) {
  const vendorId = req.params.id
  vendors
    .getSpecificVendor(vendorId)
    .then((vendor) => res.send(vendor))
    .catch(next)
}

function createVendor(req, res, next) {
  const newVendor = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    companyName: req.body.company_name,
    alcohol: req.body.alcohol,
    vegan: req.body.vegan_option,
  }

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(req.body.password, salt))
    .then((hash) => vendors.createVendor({ ...newVendor, password: hash }))
    .then((newVendor) => {
      const token = jwt.sign({ vendor: newVendor.id }, SECRET, {
        expiresIn: "60m",
      })
      res.status(201).send({ access_token: token })
    })
    .catch(next)
}

function loginVendor(req, res, next) {
  const email = req.body.email
  const password = req.body.password

  vendors
    .getVendorLogin(email) // Need to handle error if no user exists because empty arr is passed into next .then()
    .then((vendor) => {
      bcrypt.compare(password, vendor.password).then((match) => {
        if (!match) {
          const error = new Error("Unauthorized")
          error.status = 401
          next(error)
        } else {
          const token = jwt.sign({ user: vendor.id }, SECRET, {
            expiresIn: "1h",
          })
          res.status(200).send({ access_token: token })
        }
      })
    })
    .catch(next)
}

module.exports = { allVendors, getSpecificVendor, createVendor, loginVendor }
