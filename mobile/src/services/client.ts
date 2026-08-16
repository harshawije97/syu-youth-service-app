import { getAllData } from "@/lib/api";
import {
  Client,
  CLIENT_KEY,
  seedClientsToStorage,
} from "@/storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Check is storage empty
export const isStorageEmpty = async (): Promise<boolean> => {
  const data = await AsyncStorage.getItem(CLIENT_KEY);
  if (!data) return true;

  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length === 0;
  } catch {
    return false;
  }
};
// Clear the storage
export const clearStorage = async (): Promise<void> => {
  await AsyncStorage.removeItem(CLIENT_KEY);
};
// Run the API
export const fetchAllClients = async (): Promise<Client[]> => {
  const data = await getAllData();
  return data;
};
// Save fetched data to local storage

// Client Service
export const clientSyncService = async (): Promise<void> => {
  const empty = await isStorageEmpty();

  if (!empty) {
    await clearStorage();
  }

  // TODO:: these functions have to be changed.
  //  Fetch all clients -> fetch from the mongodb
  //  Seed clients into storage -> as usual

  const clients = await fetchAllClients();
  const response = await seedClientsToStorage(clients);
  await AsyncStorage.setItem(CLIENT_KEY, JSON.stringify(response));
};

export const getLocalClients = async (): Promise<number> => {
  const raw = await AsyncStorage.getItem(CLIENT_KEY);
  if (!raw) return 0;

  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed.length : 0;
};

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
