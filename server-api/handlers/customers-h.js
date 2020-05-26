const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

dotenv.config()
const SECRET = process.env.JWT_SECRET

const customers = require("../model/customers-m")

function allCustomers(req, res, next) {
  customers
    .getAllCustomers()
    .then((allCustomers) => {
      res.send(allCustomers)
    })
    .catch(next)
}

function createCustomer(req, res, next) {
  const newCustomer = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    age: req.body.age,
    gender: req.body.gender,
    icecreamFlavour: req.body.icecreamFlavour,
  }

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(req.body.password, salt))
    .then((hash) =>
      customers.createCustomer({ ...newCustomer, password: hash })
    )
    .then((customer) => {
      const token = jwt.sign({ customerId: customer.id }, SECRET, {
        expiresIn: "1h",
      })
      res.status(201).send({ access_token: token })
    })
    .catch(next)
}

function loginCustomer(req, res, next) {
  const email = req.body.email
  const password = req.body.password

  customers
    .getCustomer(email)
    .then((customer) => {
      bcrypt.compare(password, customer.password).then((match) => {
        if (!match) {
          const error = new Error(
            "Unauthorized: Sorry, no ice cream for you today"
          )
          error.status = 401
          next(error)
        } else {
          const token = jwt.sign({ user: customer.id }, SECRET, {
            expiresIn: "1h",
          })
          res.status(200).send({ access_token: token })
        }
      })
    })
    .catch(next)
}

function getSpecificCustomer(req, res, next) {
  const customerID = req.params.id
  customers
    .getSpecificCustomer(customerID)
    .then((specificCustomer) => {
      res.send(specificCustomer)
    })
    .catch(next)
}

module.exports = {
  allCustomers,
  createCustomer,
  loginCustomer,
  getSpecificCustomer,
}
