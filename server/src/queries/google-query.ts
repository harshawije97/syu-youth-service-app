import { JWT } from "google-auth-library";
import { google } from "googleapis";

// Queries of google sheet
export const getSheetData = async (
  auth: JWT,
  sheetId: string,
  range: string,
) => {
  const sheets = google.sheets("v4");

  const response = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: sheetId,
    range,
  });

  return response.data.values || [];
};
