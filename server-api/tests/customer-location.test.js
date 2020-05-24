const build = require("../db/build")
const db = require("../db/connection")

const model = require("../model/customer-location-m")
const handler = require("../handlers/customer-location-h")

const supertest = require("supertest")
const server = require("../server")

// *important* Without this you get the error:
// "This usually means that there are asynchronous operations that weren't stopped in your tests."
afterAll(done => {
  db.end() // After all the tests have run close the db connection
  server.close()
  done()
})

test("Tests are working", () => {
  var expected = 4
  var actual = 2 + 2
  expect(actual).toBe(expected)
})

describe("Test the customer location model db queries", () => {
  beforeEach(() => {
    return build() // We teardown the db (drop the tables )then initialize it before each test
  })

  // Declare the variables to be used in the tests
  let customerId
  let lat
  let lng
  let temp

  test("1) Using promises: Can GET all customer locations", () => {
    expect.assertions(4) // We want to make sure the promise resolves and the three tests are run
    return model // Make sure you return something otherwise the tests will not run
      .getAllCustomerLocations()
      .then((locations) => {
        expect(locations.length).toBe(5)
        expect(typeof locations[2].latitude).toBe(typeof "string")
        expect(locations[2].latitude).toBe("51.500729")
        expect(locations[2]).toHaveProperty("latitude", "51.500729")
      })
  })

  test("2) Using .resolves: Can GET all customer locations", () => {
    expect.assertions(1)
    return expect(model.getAllCustomerLocations()).resolves.toHaveLength(5)
  })

  test("3) Using Async/Await: Can GET all customer locations", async () => {
    expect.assertions(1)
    const locations = await model.getAllCustomerLocations()
    expect(locations.length).toBe(5)
  })

  test("Can POST new customer location entry", () => {
    customerId = 1
    lat = 51.496281
    lng = 0.1452
    temp = 21
    return model
      .addNewCustomerLocation(customerId, lat, lng, temp)
      .then((result) => {
        expect(typeof result.rows[0].latitude).toBe(typeof "51.496281")
        expect(result.rows[0].latitude).toBe("51.496281")
        expect(result.rows[0].longitude).toBe("0.1452")
      })
  })
})

// test("Simulate what supertest is doing", () => {
//   const fakeReq = {}
//   const fakeRes = { send: (data) => expect(data.length).toBe(5) }
//   return handler.allCustomerLocations(fakeRequest, fakeResponse)
// })

describe("Test the customer location handler and endpoints", () => {
  beforeEach(() => {
    return build()
  })

  test("GET all customer locations", async () => {
    const res = await supertest(server).get("/customers/coords")
    expect(res.status).toBe(200)
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
