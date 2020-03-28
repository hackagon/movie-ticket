import app from "../src/app";
import * as request from "supertest";
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe("GET /api/genres", () => {
  it("Should return 200 OK", (done) => {
    request(app).get("/api/genres")
      .expect(200, done);
  })

  it("Should return 200 OK", (done) => {
    request(app).get("/api/genres")
      .expect(300, done);
  })
})