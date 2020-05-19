const model = require("../model/customer-location-m")
const build = require("../db/build")

test("Tests are working", () => {
  var expected = 4
  var actual = 2 + 2
  expect(expected).toBe(actual)
})

test("Customer location database updates with new entry", () => {
  build().then(() => {
    model.addCustomerLocation(1, 51.496281, 0.1452, 21).then(() => {
      model.getAllCustomerLocations().then((locations) => {
        const latestLocation = locations[locations.length - 1]
        expect(latestLocation.latitude).toBe(51.496281)
      })
    })
  })
})
