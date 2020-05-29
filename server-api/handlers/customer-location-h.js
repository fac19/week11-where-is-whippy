const model = require("../model/customer-location-m");
// const geo = navigator.geolocation maybe need to add window.navigator.geolocation?

function allCustomerLocations(req, res, next) {
  model
    .getAllCustomerLocations()
    .then((allLocations) => {
      res.send(allLocations);
    })
    .catch(next);
}

function addNewCustomerLocation(req, res, next) {
  const customerId = req.body.customerId;
  const lat = req.body.latitude;
  const lng = req.body.longitude;
  const temp = req.body.temperature;

  model
    .addNewCustomerLocation(customerId, lat, lng, temp)
    .then((RETURNING) => {
      res.send(RETURNING.rows[0]);
    })
    .catch(next);
}

module.exports = {
  addNewCustomerLocation,
  allCustomerLocations,
};
