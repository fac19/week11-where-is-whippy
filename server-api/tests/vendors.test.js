const build = require("../db/build");
const db = require("../db/connection");
const model = require("../model/vendors-m");
const handler = require("../handlers/vendors-h");

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

describe("Test vendor database queries", () => {
  // Missing db tests
  //

  let reqBody;
  let email;

  test("Can POST new vendor to db to signup", () => {
    let reqBody = {
      name: "Lola's Ice",
      email: "lola@icecream.com",
      password: "password",
      mobile: "07924861579",
      companyName: "Ice Creams R Us",
      alcohol: true,
      vegan: false,
    };
    expect.assertions(2);

    return model.createVendor(reqBody).then((result) => {
      expect(result.rows).toHaveLength(1);
      expect(result.rows[0]).toHaveProperty("name", "Lola's Ice");
    });
  });

  test("Can GET specific vendor using email", () => {
    email = "jack@test.com";
    expect.assertions(2);

    return model.getVendorLogin("jack@test.com").then((result) => {
      expect(result[0]).toHaveLength(1);
      expect(result[0]).toHaveProperty("company_name", "SarahJBB");
    });
  });
});
