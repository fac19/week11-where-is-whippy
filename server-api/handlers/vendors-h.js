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
    name: "A AM A TEST USER",
    email: "jimmyface123@stinky.com",
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
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(reqBody.password, salt))
    .then((hash) => {
      // console.log({ ...reqBody, password: hash })
      // console.log(reqBody)
      // res.send({ ...reqBody, password: hash })
      vendors.createVendor({ ...reqBody, password: hash }) // We send { ...reqBody, password: hash } to db query
      //   vendors.createVendor(reqBody)
    })

    .then((newUser) => {
      // console.log("createVendor -> newUser", newUser)
      res.send(newUser)
    })
    //   vendors
    //     .createVendor(reqBody)

    .catch(next)
}

module.exports = { createVendor, allVendors }
