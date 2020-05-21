const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

const vendors = require("../model/vendors-m")

function allVendors(req, res, next) {
  console.log("allvendors has been called")
  vendors
    .getAllVendors()
    .then((allVendors) => {
      res.send(allVendors)
    })
    .catch(next)
}

function createVendor(req, res, next) {
  const reqBody = {
    name: "A LIKE SAUSAGES",
    email: "jimmyface123@sausages.com",
    password: "password",
    mobile: 07868315123,
    company_name: "Jimmy's Ice",
    alcohol: true,
    vegan_option: true,
  }
  //   vendors
  //     .createVendor(reqBody) // We send the reqBody object to the db query
  //     .then((newUser) => {
  //       res.send(newUser.rows[0])
  //     })

  // const password = reqBody.passwords
  const SECRET = process.env.JWT_SECRET

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(reqBody.password, salt))
    .then((hash) => {
      vendors.createVendor({ ...reqBody, password: hash })
    })
    .then((user) => {
      const token = jwt.sign({ user: user.name }, SECRET, { expiresIn: "60m" })
      res.status(201).send({ access_token: token })
    })
    .then((newUser) => {
      res.send(newUser)
    })
    .catch(next)
}

module.exports = { createVendor, allVendors }
