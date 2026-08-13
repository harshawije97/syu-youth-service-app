import { initializeAuth } from "../google/auth.js";
import { getSheetData } from "../queries/google-query.js";
import type { FormResponse } from "../utils/constants.js";
import { updateResponseFormat } from "../utils/update-response-format.js";

export const getFormResponses = async (
  sheetId: string,
  count: number = 10,
  sheetName: string,
): Promise<any[]> => {
  try {
    // Setup auth
    const auth = initializeAuth();
    // specify range
    const range = `'${sheetName}'!A1:Z${count + 1}`;
    // get data
    const rows = await getSheetData(auth, sheetId, range);
    // format into readable objects
    const formatRows = updateResponseFormat(rows);
    // return
    return formatRows;
  } catch (error) {
    console.error("Error fetching from Google Sheets:", error);
    throw error;
  }
};
