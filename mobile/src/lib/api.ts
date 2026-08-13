import { API_URL } from "@/lib/resolve-api";

export const saveAttendance = async (data: any) => {
  const res = await fetch(`${API_URL}/attendance`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
};
