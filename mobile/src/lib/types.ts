export type ScanData = {
  id: string;
  fullName: string;
  mobileNumber: string;
  dateOfBirth: string;
};

export type ScanState = {
  scanned: boolean;
  scannedData: string | null;
  setScanned: (data: string) => void;
  resetScanned: () => void;
};
