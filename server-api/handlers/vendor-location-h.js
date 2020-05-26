const model = require("../model/vendor-location-m")

function allVendorLocations(req, res, next) {
  console.log("hi")
  // model
  //   .getAllVendorLocations()
  //   .then((allLocations) => {
  //     res.send(allLocations)
  //   })
  //   .catch(next)
}

function addNewVendorLocation(req, res, next) {
  const vendorId = req.body.vendor_id
  const lat = req.body.latitude
  const lng = req.body.longitude

  model
    .addNewVendorLocation(vendorId, lat, lng)
    .then((returning) => {
      res.send(returning.rows[0])
    })
    .catch(next)
}

module.exports = { allVendorLocations, addNewVendorLocation }
