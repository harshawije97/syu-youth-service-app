import { google } from "googleapis";
import { JWT } from "google-auth-library";

// export const googleAuth = new google.auth.GoogleAuth({
//   keyFile: "./google/service-account.json",
//   scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
// });

export const initializeAuth = (): JWT => {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  //   Check the availability
  if (!privateKey || !clientEmail) {
    throw new Error("Missing environment variables");
  }

  //   new JWT
  return new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
};
