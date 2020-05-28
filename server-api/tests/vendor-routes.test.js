const build = require("../db/build");
const db = require("../db/connection");
const model = require("../model/vendor-routes-m");
const handler = require("../handlers/vendor-routes-h");

const supertest = require("supertest");
const server = require("../server");

test("Tests are working", () => {
  var expected = 4;
  var actual = 2 + 2;
  expect(actual).toBe(expected);
});

beforeEach(() => {
  return build();
});

afterAll(() => {
  db.end();
});

describe("Test vendor-routes database queries", () => {
  // Missing db tests
  // Test GET routes by name query
  // Test DELETE route query

  let reqBody;

  test("Can POST route stop to database", () => {
    let reqBody = {
      vendorId: 1,
      name: "My glorious route",
      stopNumber: 1,
      timeFrom: "10:00:00",
      timeTo: "11:00:00",
      address: "E9 6C2",
    };
    expect.assertions(2);

    return model.createNewRouteStop(reqBody).then((result) => {
      expect(result.rows).toHaveLength(1);
      expect(result.rows[0]).toHaveProperty("name", "My glorious route");
    });
  });
});

describe("Testing vendor handler", () => {
  // Missing handler tests
  // Test GET routes by name endpoint
  // Test DELETE route endpoint

  let reqBody;
  test("Handler can POST more than one route stop to database at a time", async () => {
    reqBody = [
      {
        vendorId: 1,
        name: "My tested route",
        stopNumber: 1,
        timeFrom: "10:00:00",
        timeTo: "11:00:00",
        address: "E9 6C2",
      },
      {
        vendorId: 1,
        name: "My tested route",
        stopNumber: 2,
        timeFrom: "11:00:00",
        timeTo: "12:00:00",
        address: "E4 6C2",
      },
      {
        vendorId: 1,
        name: "My tested route",
        stopNumber: 3,
        timeFrom: "12:00:00",
        timeTo: "13:00:00",
        address: "E8 6C2",
      },
    ];
    const res = await supertest(server).post("/vendors/routes").send(reqBody);
    expect(res.status).toBe(201);
  });
});
