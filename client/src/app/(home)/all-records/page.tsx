import { getAllAttendanceRecords } from "@/services/get-pre-records";
import React from "react";

async function AllRecordsPage() {
  await getAllAttendanceRecords();
  return <div>AllRecordsPage</div>;
}

export default AllRecordsPage;
