const express = require("express")
const PORT = process.env.PORT || 8080

// Handler modules
const customerLocationsHandler = require("./handlers/customer-location-h")
const vendorLocationsHandler = require("./handlers/vendor-location-h")
const vendors = require("./handlers/vendors-h")

// Middleware
const handleError = require("./middleware/handleError")
const logger = require("./middleware/logger")

const server = express()
server.use(express.json())
server.use(logger)

// Request Handling
//GET
server.get("/", (req, res, next) =>
  res.send("Home: Please refer to Readme for specific endpoints")
)
server.get("/customers/all", customerLocationsHandler.allCustomerLocations)
server.get("/vendors/all", vendorLocationsHandler.allVendorLocations)

// POST
server.post(
  "/customers/coords/",
  customerLocationsHandler.addNewCustomerLocation
)
server.post("/vendors/coords/", vendorLocationsHandler.addNewVendorLocation)

// SIGNUP/LOGIN
server.post("/vendors/signup", vendors.createVendor)
// server.post('/login vendor endpoint', callback)
// server.post('/customer endpoint', callback)
// server.post('/login customer endpoint', callback)

// PUT
// server.put('/vendor endpoint', callback) // For vendors to update info

// DELETE
// server.delete('/vendor endpoint', callback) // For vendors to delete account
// server.delete('/customer endpoint', callback) // For customer to delete account

server.use(handleError)
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))

// Tables
// Customers Info (done)
// Vendors Info (done)
// Customer location (done)
// vendor live location
// vendor routes

// routes
// Vendors need:
// post live location
// update live location
// get live location

// get vendor live location
// get vendor routes
