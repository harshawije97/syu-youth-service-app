import { API_URL } from "@/lib/resolve-api";


// Get all data from API
export const getAllData = async () => {
  const res = await fetch(`https://syu-youth-service-app-production.up.railway.app/responses/all`);
  return res.json();
}

export const saveAttendance = async (data: any) => {
  const res = await fetch(`${API_URL}/attendance`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
};
