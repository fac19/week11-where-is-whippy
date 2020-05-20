const customerLocationModel = require("../model/customer-location-m")
const geo = navigator.geolocation

function addNewCustomerLocation(customer, req, res, next) {
  // Has the customer already entered a request in the last half an hour?
  let result = customerLocationModel.getAllCustomerLocations(
    " WHERE time >= NOW() - INTERVAL '30 minutes'"
  )
  if (result) console.log("You have already made an entry")
  else {
    const customerId = customer || 5
    const position = geo.getCurrentPosition
    const lat = position.coords.latitude
    const lng = position.coords.lng
    customerLocationModel.addCustomerLocation(customerId, lat, lng)
  }
}

function allCustomerLocations(req, res, next) {
  customerLocationModel
    .getAllCustomerLocations()
    .then((allLocations) => {
      res.send(allLocations)
    })
    .catch(next)
}

module.export = { addNewCustomerLocation, allCustomerLocations }
