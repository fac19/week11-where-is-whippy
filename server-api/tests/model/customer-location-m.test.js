const build = require("../../db/build");
const db = require("../../db/connection");
const model = require("../../model/customer-location-m");

beforeEach(() => {
  return build();
});

// *important* Without this you get the error:
// "This usually means that there are asynchronous operations that weren't stopped in your tests."
afterAll(() => {
  db.end(); // After all the tests have run close the db connection
});

test("Tests are working", () => {
  var expected = 4;
  var actual = 2 + 2;
  expect(actual).toBe(expected);
});

describe("Test we can select all rows from the customer location table", () => {
  let customerId;
  let lat;
  let lng;
  let temp;

  // This following 3 tests test promises with a different syntax
  it("1) Using promise chains: Returns the lat and lng columns of all of the rows", () => {
    expect.assertions(4);

    return model.getAllCustomerLocations().then((result) => {
      expect(result).toHaveLength(5);
      expect(result[2]).toHaveProperty("latitude", "51.500729");
      expect(result[2]).toHaveProperty("longitude", "-0.124625");
      expect(typeof result[2].latitude).toBe(typeof "string");
    });
  });

  it("2) Using .resolves: Returns the lat and lng columns of all of the rows", () => {
    expect.assertions(1);
    return expect(model.getAllCustomerLocations()).resolves.toHaveLength(5);
  });

  it("3) Using Async/Await: Returns the lat and lng columns of all of the rows", async () => {
    expect.assertions(1);
    const result = await model.getAllCustomerLocations();
    expect(result).toHaveLength(5);
  });

  describe("Test we can insert a new row into the customer_location table", () => {
    const reqBody = {
      customerId: 1,
      latitude: 51.496281,
      longitude: 0.1452,
      temperature: 21,
    };

    it("Enters a new row into the table and returns the lat and lng", () => {
      expect.assertions(4);

      return model.addNewCustomerLocation(reqBody).then((result) => {
        const resultsArr = result.rows[0];

        expect(result.rows).toHaveLength(1);
        expect(resultsArr).toHaveProperty("latitude", "51.496281");
        expect(resultsArr).toHaveProperty("longitude", "0.1452");
        expect(typeof resultsArr.latitude).toBe("string");
      });
    });

    test("Cannot insert new row with a zero data type", () => {
      reqBody.latitude = undefined;
      expect.assertions(1);

      return model.addNewCustomerLocation(reqBody).catch((error) => {
        expect(error.name).toMatch("error");
      });
    });

    test("Cannot insert new row with an invalid input data type", () => {
      reqBody.latitude = "String";
      expect.assertions(1);

      return model.addNewCustomerLocation(reqBody).catch((error) => {
        expect(error.name).toMatch("error");
      });
    });
  });
});

// test("Simulate what supertest is doing", () => {
//   const fakeReq = {}
//   const fakeRes = { send: (data) => expect(data.length).toBe(5) }
//   return handler.allCustomerLocations(fakeRequest, fakeResponse)
// })
