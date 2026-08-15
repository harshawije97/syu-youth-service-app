import { Attendance } from "../model/models.js";
import type { MappedRecord } from "../utils/interfaces.js";

export const saveAttendance = async (data: Omit<MappedRecord, "id">) => {
  const attend = await Attendance.create(data);

  return attend;
};
