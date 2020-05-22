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

function createVendor(req, res, next) {
  const reqBody = {
    name: "Encrypted",
    email: "encryptedUser@sausages.com",
    password: "password",
    mobile: 07868315123,
    company_name: "Jimmy's Ice",
    alcohol: true,
    vegan_option: true,
  }

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(reqBody.password, salt))
    .then((hash) => vendors.createVendor({ ...reqBody, password: hash }))
    .then((newVendor) => {
      const token = jwt.sign({ user: newVendor.name }, SECRET, {
        expiresIn: "60m",
      })
      res.status(201).send({ access_token: token })
    })
    .catch(next)
}

function loginVendor(req, res, next) {
  const reqBody = {
    email: "encryptedUser@sausages.com",
    password: "password",
  }

  vendors
    .getUser(reqBody.email)
    .then((vendor) => {
      bcrypt.compare(reqBody.password, vendor.password).then((match) => {
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

module.exports = { allVendors, createVendor, loginVendor }
