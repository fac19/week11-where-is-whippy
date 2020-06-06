const model = require("../model/customer-location-m");

function allCustomerLocations(req, res, next) {
  model
    .getAllCustomerLocations()
    .then((result) => {
      res.send(result);
    })
    .catch(next);
}

function addNewCustomerLocation(req, res, next) {
  const newCustomerlocation = req.body;

  model
    .addNewCustomerLocation(newCustomerlocation)
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch(next);
}

module.exports = {
  addNewCustomerLocation,
  allCustomerLocations,
};
