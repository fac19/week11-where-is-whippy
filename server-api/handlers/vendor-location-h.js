const vendorLocationModel = require("../model/vendor-location-m")

function allVendorLocations(req, res, next) {
  // console.log("allVendorLocations has been called")
  vendorLocationModel
    .getAllVendorLocations()
    .then((allLocations) => {
      res.send(allLocations)
    })
    .catch(next)
}

function addNewVendorLocation(req, res, next) {
  const reqBody = {
    customerId: 1,
    lat: 51.39246,
    lng: -0.11335,
  }
  vendorLocationModel
    .addNewVendorLocation(reqBody.customerId, reqBody.lat, reqBody.lng)
    .then((returning) => {
      res.send(returning.rows[0])
    })
    .catch(next)
}

module.exports = { allVendorLocations, addNewVendorLocation }
