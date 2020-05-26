const express = require("express")

// Handler modules
const customerLocationsHandler = require("./handlers/customer-location-h")
const vendorLocationsHandler = require("./handlers/vendor-location-h")
const vendorRoutesHandler = require("./handlers/vendor-routes-h")
const vendors = require("./handlers/vendors-h")
const customers = require("./handlers/customers-h")

// Middleware
const handleError = require("./middleware/handleError")
const logger = require("./middleware/logger")
const auth = require("./middleware/auth")

const server = express()
server.use(express.json())
server.use(logger)

// Request Handling
//GET
// DEPLOYMENT
server.get("/", (req, res, next) => {
  const fs = require("fs")
  const path = require("path")
  const mainPath = path.resolve(__dirname, "../client-app/build/index.html") // We are getting the index.html from the FE build file
  const mainHtml = fs.readFileSync(mainPath, "utf8")
  res.send(mainHtml)
})

server.get("/static/*", (req, res) => {
  const fs = require("fs")
  const path = require("path")
  const mainPath = path.resolve(__dirname, "../client-app/build/" + req.path)
  console.log("req.path", req.path)
  res.send(fs.readFileSync(mainPath, "utf8"))
})

// REST API
// GETauth. verifyCustomer,
server.get("/customers", customers.allCustomers) // WORKING
server.get("/customers/coords", customerLocationsHandler.allCustomerLocations) // WORKING
server.get("/customers/:id", customers.getSpecificCustomer) // WORKING
server.get("/vendors", vendors.allVendors) // WORKING
server.get("/vendors/coords", vendorLocationsHandler.allVendorLocations) // WORKING
server.get("/vendors/:id", vendors.getSpecificVendor) // WORKING
server.get("/vendors/routes/:name", vendorRoutesHandler.getRoute) // WORKING

// POST
server.post("/customers/signup", customers.createCustomer) // WORKING
server.post("/customers/login", customers.loginCustomer) // WORKING
server.post(
  "/customers/coords/",
  auth.verifyCustomer,
  customerLocationsHandler.addNewCustomerLocation
) // WORKING

server.post("/vendors/signup", vendors.createVendor) // WORKING
server.post("/vendors/login", vendors.loginVendor) // WORKING
server.post(
  "/vendors/coords/",
  auth.verifyVendor,
  vendorLocationsHandler.addNewVendorLocation
) // WORKING
server.post(
  "/vendors/routes/",
  auth.verifyVendor,
  vendorRoutesHandler.createNewRoute
) // WORKING

// PUT
// server.put('/vendor endpoint', callback) // For vendors to update info

// DELETE
// server.delete('/vendor endpoint', callback) // For vendors to delete account
// server.delete('/customer endpoint', callback) // For customer to delete account
server.delete("/vendors/routes/:name", vendorRoutesHandler.deleteRoute)

server.use(handleError)

module.exports = server
