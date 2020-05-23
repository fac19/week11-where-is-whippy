const model = require("../model/vendor-routes-m")

function createNewRoute(req, res, next) {
  //   req.body = [
  //         {"vendor_id": 1,
  //         "name": "fave-route",
  //         "stop_number": 1,
  //         "time_from": 10:00:00,
  //         "time_to": 11:00:00,
  //         "address": "E9 6C2"},
  //         {"vendor_id": 1,
  //         "name": "fave-route",
  //         "stop_number": 2,
  //         "time_from": 11:40:00,
  //         "time_to": 12:20:00,
  //         "address": "E9 6C4"},
  //         {"vendor_id": 1,
  //         "name": "fave-route",
  //         "stop_number": 3,
  //         "time_from": 13:00:00,
  //         "time_to": 13:20:00,
  //         "address": "E10 6C4"}
  //     ]
  //   const noOfStops = req.body.length
  //   console.log(typeOf(req.body))
  req.body
    .forEach((obj) => {
      const vendorId = obj.vendor_id
      const name = obj.name
      const stopNumber = obj.stop_number
      const timeFrom = obj.time_from
      const timeTo = obj.time_to
      const address = obj.adress
      console.log(stopNumber)
      //   model
      //     .createNewRouteStop({
      //       vendorId,
      //       name,
      //       stopNumber,
      //       timeFrom,
      //       timeTo,
      //       address,
      //     })
      //     .then()
      //     .catch(next)
    })
    .then((route) => res.status(201).send(route))
    .catch(next)
}
module.exports = { createNewRoute }
