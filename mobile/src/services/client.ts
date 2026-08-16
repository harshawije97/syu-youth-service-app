import { getUserById } from "@/lib/api";

// Check is storage empty
export const checkDataType = (data: string) => {
  // Check if this is a JSON string
  const expectedKeys = ["contact", "id", "name"];

  try {
    const parsed = JSON.parse(data);

    // Check if this is a valid QR code
    if (!expectedKeys.every((key) => key in parsed)) return "Invalid QR Code.";

    // Check the values
    

    return true;
  } catch (e) {
    return "Invalid QR Code. Please try again.";
  }
};

export const checkDataGuard = async (id: string) => {
  try {
    const response = await getUserById(id);
    if(!response) return false;

    return "You are already registered."
  } catch (error) {
    console.error(error);
    throw error;
  }
};
