import mongoose from "mongoose";
import { AttendanceSchema, RegistrationSchema } from "../database/schema.js";

export const Attendance = mongoose.model("Attendance", AttendanceSchema);
export const Registration = mongoose.model("Registration", RegistrationSchema);
