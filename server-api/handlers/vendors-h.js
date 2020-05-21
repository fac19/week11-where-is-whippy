const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

const vendors = require("../model/vendors-m")

function createVendor(req, res, next) {
  const reqBody = {
    name: "JimmyFace123",
    email: "jimmyface123@stinky.com",
    password: "password",
    mobile: 07868315123,
    company_name: "Jimmy's Ice",
    alcohol: true,
    vegan_option: true,
  }
  //   bcrypt.genSalt(10).then((salt) => bcrypt.hash(reqBody.password, salt))
  vendors
    .createVendor(reqBody)
    .then((newUser) => {
      res.send(newUser.rows[0])
    })
    .catch(next)
}

module.exports = { createVendor }
