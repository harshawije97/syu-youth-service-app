import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Client = {
  id: string;
  fullName: string;
  birthDate: string;
  NIC: string;
  contactNo: string;
  division: string;
  gnDivision: string;
  employment: string;
  willingToContribute: string;
  specialAbilities: string;
  comingToYouthSummit: string;
  gnDivisionCount: string;
  timestamp: string;
  isAttended?: false,
};

export type RegisteredClients = {
  id: string;
  fullName: string;
  contactNo: string;
}

export const CLIENT_KEY = "clients";

export const getClients = async (): Promise<Client[]> => {
  const data = await AsyncStorage.getItem(CLIENT_KEY);
  return data ? JSON.parse(data) : [];
};

export const addClient = async (
  client: Omit<Client, "timestamp" | "id">,
): Promise<Client> => {
  const clients = await getClients();
  const newClient = {
    ...client,
    id: uuidv4(),
    timestamp: new Date().toISOString(),
  };

  //   save client
  await AsyncStorage.setItem(
    CLIENT_KEY,
    JSON.stringify([...clients, newClient]),
  );

  return newClient;
};
