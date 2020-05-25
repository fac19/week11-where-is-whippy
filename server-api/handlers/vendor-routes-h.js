const model = require("../model/vendor-routes-m")

function createNewRoute(req, res, next) {
  return model.getAllStopsInOneRoute(req.body[0].name).then((results) => {
    if (results.length !== 0) {
      res.status(409).send("Name exists in db. Please use unique name")
    } else {
      let promiseArray = req.body.map((obj) => {
        return model.createNewRouteStop(obj) // We need to return a promise for each db query!!
      })

      // How to use Promise.all to wait for multiple promises to resolve
      // 1) Create an array of promises as a variable
      // 2) use a Promise.all to wait until all of the promises have resolved
      // 3) Then you can chain on a .then()
      Promise.all(promiseArray)
        .then((arrOfDbResults) => {
          let resultsArrForFe = arrOfDbResults.map((result) => result.rows[0])
          res.status(201).send(resultsArrForFe)
        })
        .catch(next)
    }
  })
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

function deleteRoute(req, res, next) {
  const routeName = req.params.name
  model
    .deleteRoute(routeName)
    .then((result) => res.sendStatus(204))
    .catch(next)
}

module.exports = { createNewRoute, getRoute, deleteRoute }
