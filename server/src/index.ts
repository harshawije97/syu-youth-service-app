import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import {
  getAllFormResponses,
  getFormResponses,
} from "./services/form-response-service.js";
import cors from "cors";
import { dbClient } from "./database/client.js";
import {
  getAllRegistrations,
  getRegistrationById,
  registrationsByQR,
  saveAttendance,
} from "./queries/mongodb-query.js";

dotenv.config();
const sheetId = process.env.GOOGLE_SHEET_ID;

const app = express();
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

// Public routes
app.get("/", (_req, res) => {
  res.render("index");
});

app.get("/api/test", (_req, res) => {
  res.status(200).send("API is running");
});

app.get("/not-found", (_req, res) => {
  res.status(404).send("Not found");
});

app.post("/register", async (req, res) => {
  try {
    const body = req.body;
    const response = await saveAttendance(body);

    res.status(200).json({
      success: true,
      data: response.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.post("/attendance", async (req, res) => {
  try {
    const body = req.body;
    const response = await registrationsByQR(body);

    res.status(200).json({
      success: true,
      data: response.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/attendance/all", async (req: Request, res: Response) => {
  try {
    const response = await getAllRegistrations();

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Get attendance by id
app.get("/attendance", async (req: Request, res: Response) => {
  try {
    // Get id by query param
    const id = req.query.id as string;
    const response = await getRegistrationById(id);

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Google sheet responses - limit
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

// Google sheet responses - all
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

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  await dbClient();
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

bootstrap();
