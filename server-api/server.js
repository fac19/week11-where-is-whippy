const express = require("express");
const PORT = process.env.PORT || 3000;
const customerLocations = require("./handlers/customer-location-h");

const server = express();

server.use(express.json());





// Put our handle error handler here
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// Request Handling
//GET
server.get("/", () => console.log("you're at the home route"))
server.get("/customers/all", customerLocations.allCustomerLocations)

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