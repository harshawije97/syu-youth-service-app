import mongoose from "mongoose";
import { AttendanceSchema } from "../database/schema.js";

export const Attendance = mongoose.model("Attendance", AttendanceSchema);
