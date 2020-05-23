const model = require("../model/customer-location-m")
const handler = require("../handlers/customer-location-h")
const { build, closeDb } = require("../db/build")

const db = require("../db/connection")

// beforeAll(() => {
//   return build()
// })

test("Customer location database updates with new entry", () => {
  build()
    .then(() => {
      model.addNewCustomerLocation(1, 51.496281, 0.1452, 21).then((result) => {
        expect(result.rows[0].latitude).toBe(51.496281)
        expect(result.rows[0].longitude).toBe(0.1452)
      })
    })
    .catch((error) => console.error(error))
})

// test("Customer location database updates with new entry", () => {
//   const reqBody = {
//     customerId: 1,
//     lat: 51.56506,
//     lng: -0.09763,
//     temp: 30,
//   }

//   build().then(() => {
//     model
//       .addNewCustomerLocation(1, 51.496281, 0.1452, 21)
//       .then((result) => {
//         console.log(result.rows[0])
//       })
//       .catch((error) => {
//         console.error(error)
//       })

//     // model.addNewCustomerLocation(1, 51.496281, 0.1452, 21).then(() => {
//     //   console.log("hello")
//     //   model
//     //     .getAllCustomerLocations()
//     //     .then((locations) => {
//     //       const latestLocation = locations[locations.length - 1]
//     //       expect(latestLocation.latitude).toBe(0)
//     //     })
//     // })
//   })
// })

// test("Ensure customer cannot create a new database entry within half an hour of their last", () => {
//   build().then(() => {
//     const actual = handler.addNewCustomerLocation()
//     expect(actual).toBe("You have already made an entr")
//   })
// })

// test("Ensure location is taken directly from device information", () => {
//   build().then(() => {
//     handler.addNewCustomerLocation(7).then(() => {
//       model.getAllCustomerLocations().then((locations) => {
//         const latestLocation = locations[locations.length - 1]
//         return latestLocation.latitude
//       })
//     })
//   })
// })

// afterAll(() => {
//   return closeDb()
// })

test("Tests are working", () => {
  var expected = 4
  var actual = 2 + 2
  expect(expected).toBe(actual)
  // db.end()
})
