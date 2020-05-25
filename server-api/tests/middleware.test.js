const build = require("../db/build")
const db = require("../db/connection")

const customerModel = require("../model/customer-location-m")
const handler = require("../handlers/customer-location-h")

const supertest = require("supertest")
const server = require("../server")

const jwt = require("jsonwebtoken")
const httpMocks = require("node-mocks-http")

afterAll(() => {
  db.end()
})

//if user is not verified, return a 401 message

test("Returns a 401 status code if customer is not verfied", done => {
    const endpoint = httpMocks.createRequest
})


  it('should return error 401 if no valid token provided', (done) => {
    //send request with no middleware token
    chai.request(app).get('/protected')
      .set('Authorization', '')
      .then(res => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.be.equal('Auth failed');
        done();
      }).catch(err => {
        console.log(err.message);
      });
