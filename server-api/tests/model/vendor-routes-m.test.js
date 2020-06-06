const build = require("../../db/build");
const db = require("../../db/connection");

const model = require("../../model/vendor-routes-m");

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

describe("Test we can insert a new row into the vendor_routes table", () => {
  let reqBody;
  it("Enters a new row into the table and returns the name of the route", () => {
    reqBody = {
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
