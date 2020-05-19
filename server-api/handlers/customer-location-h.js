const customerLocationModel = require("../model/customer-location-m");
const geo = navigator.geolocation

function addNewCustomerLocation(req, res, next) {
    const customerId = /*Taken from token */ || 0;
    const position = geo.getCurrentPosition;
    const lat = position.coords.latitude;
    const lng = position.coords.lng;
    customerLocationModel.addCustomerLocation(customerId, lat, lng);    
};

function allCustomerLocations(req, res, next) {
    customerLocationModel
    .getAllCustomerLocations()
    .then((allLocations) => {
        res.send(allLocations)
    })
    .catch(next);
}

module.export = {addNewCustomerLocation, allCustomerLocations};