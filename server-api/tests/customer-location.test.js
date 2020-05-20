const model = require("../model/customer-location-m")
const handler = require("../handlers/customer-location-h")
const build = require("../db/build")

test("Tests are working", () => {
  var expected = 4
  var actual = 2 + 2
  expect(expected).toBe(actual)
})

// test("should fail", () => {
//   expect(4).toBe(2)
// })

test("Customer location database updates with new entry", () => {
  // console.log("hello")
  build()
    .then(() => {
      console.log("hello")
      model.addCustomerLocation(1, 51.496281, 0.1452, 21).then(() => {
        model
          .getAllCustomerLocations()
          .then((locations) => {
            const latestLocation = locations[locations.length - 1]
            console.log(latestLocation)
            expect(latestLocation.latitude).toBe(0)
          })
          .catch((error) => {
            console.error(error)
          })
      })
    })
    .catch((error) => {
      console.error(error)
    })
})

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
