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
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  const username = req.body.username
  const age = req.body.age
  const gender = req.body.gender
  const icecreamFlavour = req.body.icecream_flavour

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) =>
      customers.createCustomer({
        name,
        email,
        password: hash,
        username,
        age,
        gender,
        icecreamFlavour,
      })
    )
    .then((customer) => {
      const token = jwt.sign({ customer: customer.id }, SECRET, {
        expiresIn: "1h",
      })
      res.status(201).send({ access_token: token })
    })
    .catch(next)
}

module.exports = { allCustomers, createCustomer }
