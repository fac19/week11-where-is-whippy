const express = require("express")
const PORT = process.env.PORT || 8080

// Handler modules
const customerLocationsHandler = require("./handlers/customer-location-h")
const vendorLocationsHandler = require("./handlers/vendor-location-h")

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

server.use(handleError)
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))

//server.method("route-name", handlerFunction)

// CUSTOMER ROUTES

// LOCATION ROUTES

// Tables
// Customers Info (done)
// Vendors Info (done)
// Customer location (done)
// vendor live location
// vendor routes

// routes
// Vendors need:
// Get login information
// Post login information

// Get customer locations

// Post routes
// Get routes
// Update routes
// Delete routes

// post live location
// update live location
// get live location

// customer needs:
// post login
// get login

// get vendor live location
// get vendor routes

// post customer location
