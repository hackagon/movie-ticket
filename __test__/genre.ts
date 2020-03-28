import app from "../src/app";
import * as request from "supertest";
import { Response } from "express";
import * as chai from "chai";

require('mysql2/node_modules/iconv-lite').encodingExists('foo');

const expect = chai.expect;

describe("GET /api/genres", () => {
  it("Should return 200 OK", (done) => {
    request(app).get("/api/genres")
      .expect(200, done)
  })

  it("Should return 200 OK", async (done) => {
    const res = await request(app).get("/api/genres")
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an("array")

    done()
  })
})