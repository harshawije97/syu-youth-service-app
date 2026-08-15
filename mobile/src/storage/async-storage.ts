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

type ApiClientRecord = {
  "Are you coming to Youth Summit?": string;
  Birthdate: string;
  Division: string;
  "Employment/Study status": string;
  "For that, any special abilities, etc": string;
  "Full Name/ Name with Initials": string;
  "G.N. Division for Count": string;
  "GN Division": string;
  "NIC No": string;
  Timestamp: string;
  "WhatsApp / Contact No": string;
  "Willing to contribute/ work with SYU in further?": string;
};

export const CLIENT_KEY = "clients";
type ApiResponse = Record<string, ApiClientRecord>;

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

export const mapApiResponseToClients = (
  response: ApiResponse | Client[],
): Client[] => {
  return Object.entries(response).map(([id, record]) => ({
    id: id + 1, // key from the response object becomes the client's id
    fullName: record["Full Name/ Name with Initials"],
    birthDate: record["Birthdate"],
    NIC: record["NIC No"],
    contactNo: record["WhatsApp / Contact No"],
    division: record["Division"],
    gnDivision: record["GN Division"],
    employment: record["Employment/Study status"],
    willingToContribute:
      record["Willing to contribute/ work with SYU in further?"],
    specialAbilities: record["For that, any special abilities, etc"],
    comingToYouthSummit: record["Are you coming to Youth Summit?"],
    gnDivisionCount: record["G.N. Division for Count"],
    timestamp: record["Timestamp"],
  }));
};

export const seedClientsToStorage = async (
  clients: Client[],
): Promise<Client[]> => {
  //   save all clients
  const refactorClients = mapApiResponseToClients(clients);
  await AsyncStorage.setItem(CLIENT_KEY, JSON.stringify(refactorClients));

  return refactorClients;
};
