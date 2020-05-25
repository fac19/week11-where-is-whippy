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
// GET
server.get("/customers", customers.allCustomers)
server.get("/customers/:id", customers.getSpecificCustomer)
server.get("/customers/coords", customerLocationsHandler.allCustomerLocations)
server.get("/vendors", vendors.allVendors)
server.get("/vendors/:id", vendors.getSpecificVendor)
server.get("/vendors/coords", vendorLocationsHandler.allVendorLocations)
server.get("/vendors/routes/:name", vendorRoutesHandler.getRoute)

// POST
server.post("/customers/signup", customers.createCustomer)
server.post("/customers/login", customers.loginCustomer)
server.post(
  "/customers/coords/",
  customerLocationsHandler.addNewCustomerLocation
)
server.post("/vendors/signup", vendors.createVendor)
server.post("/vendors/login", vendors.loginVendor)
server.post("/vendors/coords/", vendorLocationsHandler.addNewVendorLocation)
server.post("/vendors/routes/", vendorRoutesHandler.createNewRoute)

// PUT
// server.put('/vendor endpoint', callback) // For vendors to update info

// DELETE
// server.delete('/vendor endpoint', callback) // For vendors to delete account
// server.delete('/customer endpoint', callback) // For customer to delete account

server.use(handleError)

module.exports = server
