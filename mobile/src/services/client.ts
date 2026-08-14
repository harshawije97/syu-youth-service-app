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

  const clients = await fetchAllClients();
  const response = await seedClientsToStorage(clients);
  await AsyncStorage.setItem(CLIENT_KEY, JSON.stringify(response));
};
