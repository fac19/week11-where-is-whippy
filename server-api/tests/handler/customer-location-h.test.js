const build = require("../../db/build");
const db = require("../../db/connection");

const model = require("../../model/customer-location-m");
const handler = require("../../handlers/customer-location-h");

const supertest = require("supertest");
const server = require("../../server");

beforeEach(() => {
  return build();
});

afterAll(() => {
  db.end();
});

test("Tests are working", () => {
  var expected = 4;
  var actual = 2 + 2;
  expect(actual).toBe(expected);
});

describe("Test the handlers that serve data from customer location table work", () => {
  test("GET all customer locations", async () => {
    const res = await supertest(server).get("/customers/coords");
    expect(res.status).toBe(200);
  });
});
