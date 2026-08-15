import mongoose from "mongoose";

export const AttendanceSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: false,
  },
  contactNo: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: false,
  },
  gnDivision: {
    type: String,
    required: false,
  },
  employment: {
    type: String,
    required: true,
  },
  willingToContribute: {
    type: String,
    required: false,
  },
  specialAbilities: {
    type: String,
    required: false,
  },
  comingToYouthSummit: {
    type: String,
    required: true,
  },
  gnDivisionCount: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  isRegistered: {
    type: Boolean,
    required: true,
  },
});

export const RegistrationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});
