const model = require("../model/vendor-routes-m")

function createNewRoute(req, res, next) {
  // 1) Create an array of promises as a variable
  // 2) use a Promise.all to wait until all of the promises have resolved
  // 3) Then you can chain on a .then()

  //FOR SINGLE ROUTE STOP ADDITION
  // model
  // .createNewRouteStop(req.body)
  // .then((returning) => res.send(returning.rows[0]))
  // .catch(next)

  let promiseArray = req.body.map((obj) => {
    return model.createNewRouteStop(obj) // We need to return a promise for each db query!!
  })

  Promise.all(promiseArray)
    .then((arrOfDbResults) => {
      let resultsArrForFe = arrOfDbResults.map((result) => result.rows[0])
      res.status(201).send(resultsArrForFe)
    })
    .catch(next)
}

function getRoute(req, res, next) {
  const routeName = req.params.name
  //name MUST be sent with %20 on FE

  model
    .getAllStopsInOneRoute(routeName)
    .then((allStops) => {
      res.send(allStops)
    })
    .catch(next)
}

module.exports = { createNewRoute, getRoute }
