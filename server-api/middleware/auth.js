const jwt = require("jsonwebtoken")
const customerModel = require("../model/customers-m")
const vendorModel = require("../model/vendors-m")

require("dotenv").config()

const SECRET = process.env.JWT_SECRET

function verifyCustomer(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    const error = new Error("Authorization header required") //look into this
    error.status = 400
    next(error)
  }
  const token = authHeader.replace("Bearer ", "")
  try {
    const data = jwt.verify(token, SECRET)
    customerModel
      .getSpecificCustomer(data.email)
      .then((id) => {
        req.id = id
        next()
      })
      .catch(next)
  } catch (_) {
    const error = new Error("Unauthorized")
    error.status = 401
    next(error)
  }
}

function verifyVendor(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    const error = new Error("Authorization header required") //look into this
    error.status = 400
    next(error)
  }
  const token = authHeader.replace("Bearer ", "")
  try {
    const data = jwt.verify(token, SECRET)
    vendorModel
      .getSpecificVendor(data.email)
      .then((id) => {
        req.id = id
        next()
      })
      .catch(next)
  } catch (_) {
    const error = new Error("Unauthorized")
    error.status = 401
    next(error)
  }
}

model.exports = { verifyCustomer, verifyVendor }
