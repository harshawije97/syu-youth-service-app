import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Public routes
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/not-found", (_req, res) => {
  res.status(404).send("Not found");
});

app.post("/register", (_req, res) => {
  res.send("Register");
});

// Auth routes - Protected routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
