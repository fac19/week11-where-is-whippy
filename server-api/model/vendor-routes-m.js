const db = require("../db/connection")

function createNewRouteStop(routeStop) {
  return db.query(
    `INSERT INTO vendor_routes (vendor_id, name, stop_number, time_from, time_to, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, vendor_id, name, stop_number, time_from, time_to, address`,
    [
      routeStop.vendorId,
      routeStop.name,
      routeStop.stopNumber,
      routeStop.timeFrom,
      routeStop.timeTo,
      routeStop.address,
    ]
  )
}

function getAllStopsInOneRoute(name) {
  return db
    .query(
      `SELECT stop_number, time_from, time_to, address FROM vendor_routes WHERE lower(name)=lower($1)`,
      [name]
    )
    .then((results) => results.rows)
}

function deleteRoute(name) {
  return db.query(`DELETE FROM vendor_routes WHERE lower(name)=lower($1)`, [
    name,
  ])
}

module.exports = { createNewRouteStop, getAllStopsInOneRoute, deleteRoute }
