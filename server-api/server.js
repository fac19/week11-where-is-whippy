// Tables
// Customers Info
// Vendors Info
// Customer location
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

const express = require("express");
const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

//server.method("route-name", handlerFunction)

// CUSTOMER ROUTES

// LOCATION ROUTES
