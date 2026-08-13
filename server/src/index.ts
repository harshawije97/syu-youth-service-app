import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import {
  getAllFormResponses,
  getFormResponses,
} from "./services/form-response-service.js";

dotenv.config();
const sheetId = process.env.GOOGLE_SHEET_ID;

const app = express();

// Public routes
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/not-found", (_req, res) => {
  res.status(404).send("Not found");
});

app.post("/register", async (_req, res) => {
  res.send("Register");
});

app.get("/responses", async (req: Request, res: Response) => {
  try {
    if (!sheetId) {
      return res.status(500).json({ error: "GOOGLE_SHEET_ID not configured" });
    }

    const take = parseInt(req.query.take as string) || 10;
    const skip = parseInt(req.query.skip as string) || 0;

    const response = await getFormResponses(
      sheetId,
      take,
      skip,
      "SYU_Responses",
    );

    res.status(200).json({
      success: true,
      ...response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/responses/all", async (req: Request, res: Response) => {
  try {
    if (!sheetId) {
      return res.status(500).json({ error: "GOOGLE_SHEET_ID not configured" });
    }

    const response = await getAllFormResponses(sheetId, "SYU_Responses");

    res.status(200).json({
      success: true,
      ...response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Auth routes - Protected routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
