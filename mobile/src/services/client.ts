// Check is storage empty
export const checkDataType = (data: string) => {
  // Check if this is a JSON string
  const expectedKeys = ["contact", "id", "name"];

  try {
    const parsed = JSON.parse(data);

    if (!expectedKeys.every((key) => key in parsed)) return "Invalid QR Code.";
    // Check if this is a valid QR code
    return true;
  } catch (e) {
    return "Invalid QR Code. Please try again.";
  }
};
