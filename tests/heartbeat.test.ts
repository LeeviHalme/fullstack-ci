import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return the welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      "motd",
      "Welcome to the Express.js API! This message has gone through the new CI/CD pipeline!"
    );
  });
});
