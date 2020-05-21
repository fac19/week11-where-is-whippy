const customerLocationModel = require("../model/customer-location-m")
// const geo = navigator.geolocation  maybe need to add window.navigator.geolocation?

function allCustomerLocations(req, res, next) {
  customerLocationModel
    .getAllCustomerLocations()
    .then((allLocations) => {
      res.send(allLocations)
    })
    .catch(next)
}

function addNewCustomerLocation(req, res, next) {
  const reqBody = {
    customerId: 1,
    lat: 51.56506,
    lng: -0.09763,
    temp: 30,
  }
  customerLocationModel
    .addNewCustomerLocation(
      reqBody.customerId,
      reqBody.lat,
      reqBody.lng,
      reqBody.temp
    )
    .then((RETURNING) => {
      res.send(RETURNING.rows[0])
    })
    .catch(next)
}

// function addNewCustomerLocation(customer, req, res, next) {
//   // Has the customer already entered a request in the last half an hour?
//   let result = customerLocationModel.getAllCustomerLocations(
//     " WHERE time >= NOW() - INTERVAL '30 minutes'"
//   )
//   if (result) console.log("You have already made an entry")
//   else {
//     const customerId = customer || 5 // This value is taken from the request body or url using req.params
//     const position = geo.getCurrentPosition // Getting coordinates will be done on the frontend
//     const lat = position.coords.latitude
//     const lng = position.coords.lng
//     customerLocationModel.addCustomerLocation(customerId, lat, lng)
//   }
// }

module.exports = { addNewCustomerLocation, allCustomerLocations }
