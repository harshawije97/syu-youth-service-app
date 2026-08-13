import type { FormResponse } from "./constants.js";

const cleanHeader = (header: string) => {
  return header.split("\n")[0]!.trim();
};
export const updateResponseFormat = (rows: string[][]): FormResponse[] => {
  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0]?.map(cleanHeader) || [];
  const responses: FormResponse[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i]!;
    const formResponse: FormResponse = {};

    headers.forEach((header, index) => {
      formResponse[header] = row[index] || "";
    });

    responses.push(formResponse);
  }
  return responses;
};
