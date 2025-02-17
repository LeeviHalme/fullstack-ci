import express from "express";

const app = express();

// GET /
// Returns a welcome message.
app.get("/", (req, res) => {
  res.json({
    motd: "Welcome to the Express.js API! This message has gone through the new CI/CD pipeline!",
    endpoints: ["/api/time"],
  });
});

// GET /api/time
// Returns the current date and time in ISO format.
app.get("/api/time", (req, res) => {
  const currentDate = new Date();
  res.json({ currentDate: currentDate.toISOString() });
});

export default app;
