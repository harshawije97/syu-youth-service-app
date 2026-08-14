import { MappedRecord, OriginRecord } from "@/lib/utils";

export function mapRecords(data: Record<string, OriginRecord>): MappedRecord[] {
  return Object.entries(data).map(([id, record]) => ({
    id,
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
}

export function stringifyRecords(params: MappedRecord[]): string {
  return JSON.stringify(params, null, 2);
}
