import { Attendance, Registration } from "../model/models.js";
import type { MappedRecord, QrRecord } from "../utils/interfaces.js";

export const saveAttendance = async (data: Omit<MappedRecord, "id">) => {
  const attend = await Attendance.create(data);

  return attend;
};

export const registrationsByQR = async (data: QrRecord) => {
  const registration = await Registration.create(data);

  return registration;
};

// Get all registrations
export const getAllRegistrations = async () => {
  const registrations = await Registration.find({});

  return registrations;
};

// Get registrations by Id
export const getRegistrationById = async (id: string) => {
  const registration = await Registration.find({
    id: id,
  });

  return registration;
};
