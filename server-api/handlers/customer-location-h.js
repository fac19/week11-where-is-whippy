const model = require("../model/customer-location-m")
// const geo = navigator.geolocation maybe need to add window.navigator.geolocation?

function allCustomerLocations(req, res, next) {
  // console.log("In function")
  model
    .getAllCustomerLocations()
    .then((allLocations) => {
      res.send(allLocations)
    })
    .catch(next)
}

function addNewCustomerLocation(req, res, next) {
  const customerId = req.body.customer_id
  const lat = req.body.latitude
  const lng = req.body.longitude
  const temp = req.body.temperature

  model
    .addNewCustomerLocation(customerId, lat, lng, temp)
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

module.exports = {
  addNewCustomerLocation,
  allCustomerLocations,
}
