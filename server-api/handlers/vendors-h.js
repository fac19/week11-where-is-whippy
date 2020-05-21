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
  //   vendors
  //     .createVendor(reqBody)
  //     .then((newUser) => {
  //       res.send(newUser.rows[0])
  //     })

  const password = reqBody.password
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(reqBody.password, salt))
    .then((hash) => {
      //   console.log({ ...reqBody, password: hash })
      //   res.send({ ...reqBody, password: hash })
      vendors.createVendor({ ...reqBody, password: hash })
      //   vendors.createVendor(reqBody)
    })
    .then((newUser) => {
      console.log("createVendor -> newUser", newUser)
      res.send(newUser.rows[0])
    })
    //   vendors
    //     .createVendor(reqBody)

    .catch(next)
}

module.exports = { createVendor }
