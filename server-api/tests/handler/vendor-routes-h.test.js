const build = require("../../db/build");
const db = require("../../db/connection");

const model = require("../../model/vendor-routes-m");
const handler = require("../../handlers/vendor-routes-h");

const supertest = require("supertest");
const server = require("../../server");

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

// describe("Testing vendor handler", () => {
//   let reqBody
//   test("Handler can POST more than one route stop to database at a time", async () => {
//     reqBody = [
//       {
//         vendorId: 1,
//         name: "My glorious route",
//         stopNumber: 1,
//         timeFrom: "10:00:00",
//         timeTo: "11:00:00",
//         address: "E9 6C2",
//       },
//       {
//         vendorId: 1,
//         name: "My glorious route",
//         stopNumber: 2,
//         timeFrom: "11:00:00",
//         timeTo: "12:00:00",
//         address: "E4 6C2",
//       },
//       {
//         vendorId: 1,
//         name: "My glorious route",
//         stopNumber: 3,
//         timeFrom: "12:00:00",
//         timeTo: "13:00:00",
//         address: "E8 6C2",
//       },
//     ]
//     const res = await supertest(server).post("vendors/routes").send(reqBody)
//     expect(res.status).toBe(201)
//   })
// })
