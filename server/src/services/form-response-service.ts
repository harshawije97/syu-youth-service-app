import { initializeAuth } from "../google/auth.js";
import { getSheetData } from "../queries/google-query.js";
import type { FormResponse } from "../utils/constants.js";
import type { PaginatedResponse } from "../utils/interfaces.js";
import { updateResponseFormat } from "../utils/update-response-format.js";

export const getFormResponses = async (
  sheetId: string,
  take: number = 10,
  skip: number = 0,
  sheetName: string,
): Promise<PaginatedResponse> => {
  try {
    // Setup auth
    const auth = initializeAuth();
    // specify range
    const range = `'${sheetName}'!A1:Z`;
    // get data
    const rows = await getSheetData(auth, sheetId, range);

    if (rows.length === 0) {
      return {
        data: [],
        count: 0,
        skip,
        take,
        total: 0,
      };
    }
    // format into readable objects
    const formatRows = updateResponseFormat(rows);

    const response = formatRows.slice(skip, skip + take);
    // return
    return {
      data: response,
      count: response.length,
      skip,
      take,
      total: formatRows.length,
    };
  } catch (error) {
    console.error("Error fetching from Google Sheets:", error);
    throw error;
  }
};

// Get all form responses
export const getAllFormResponses = async (
  sheetId: string,
  sheetName: string = 'Form Responses 1'
): Promise<FormResponse[]> => {
  try {
    const auth = initializeAuth();
    
    const range = `'${sheetName}'!A:Z`;
    const rows = await getSheetData(auth, sheetId, range);
    
    const responses = updateResponseFormat(rows);
    
    return responses;
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    throw error;
  }
};
