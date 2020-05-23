const build = require("../db/build")
const db = require("../db/connection")
const server = require("../server")
const supertest = require('supertest')
const request = supertest(server)

const model = require("../model/customer-location-m")
const handler = require("../handlers/customer-location-h")

afterAll(() => {
  db.end()
})

test("Tests are working", () => {
  var expected = 4
  var actual = 2 + 2
  expect(actual).toBe(expected)
})

describe("Test the customer location model", () => {
  beforeAll(() => {
    return build() // Why do we need to return build again?
  })

  test("Can GET all customer locations", () => {
    return model
      .getAllCustomerLocations() // Make sure you return something otherwise the tests will not run
      .then((locations) => {
        expect(locations.length).toBe(5)
        expect(typeof locations[2].latitude).toBe(typeof "string")
        expect(locations[2].latitude).toBe("51.500729")
      })
  })

  test("Can POST new customer location entry", () => {
    return model
      .addNewCustomerLocation(1, 51.496281, 0.1452, 21)
      .then((result) => {
        expect(typeof result.rows[0].latitude).toBe(typeof "51.496281")
        expect(result.rows[0].latitude).toBe("51.496281")
        expect(result.rows[0].longitude).toBe("0.1452")
      })
  })
})

describe("Test the customer location handler", () => {
  beforeAll( () => {
    return build() 
  })

  test("GET all customer locations", async () => {
    const res = await request.get('/customers/coords')
    expect(res.status).toBe(201)
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
