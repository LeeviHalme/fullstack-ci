import request from "supertest";
import app from "../src/app";

describe("GET /api/time", () => {
  it("should return the current time", async () => {
    const response = await request(app).get("/api/time");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("currentDate");
  });

  it("should return a valid ISO 8601 date string", async () => {
    const response = await request(app).get("/api/time");
    expect(response.status).toBe(200);
    expect(new Date(response.body.currentDate).toISOString()).toBe(response.body.currentDate);
  });
});
