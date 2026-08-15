import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface OriginRecord {
  Timestamp: string;
  "Full Name/ Name with Initials": string;
  Birthdate: string;
  "NIC No": string;
  "WhatsApp / Contact No": string;
  Division: string;
  "GN Division": string;
  "Employment/Study status": string;
  "Willing to contribute/ work with SYU in further?": string;
  "For that, any special abilities, etc": string;
  "Are you coming to Youth Summit?": string;
  "G.N. Division for Count": string;
}

export interface MappedRecord {
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
}

// export type RegisteredRecord = {
//   fullName: string;
//   birthDate: string;
//   NIC: string;
//   contactNo: string;
//   division: string;
//   gnDivision: string;
//   employment: string;
//   willingToContribute: string;
//   specialAbilities: string;
//   timestamp: string;
// };

export interface MessageCardProps {
  id: string;
  fullName: string;
  contactNo: string;
  gnDivision: string;
  timestamp: string;
}

export type SearchParams = {
  id: string | null;
  name: string | null;
  contact: string | null;
};
