import { create } from "zustand";

type ScanState = {
  scanned: boolean;
  scannedData: string | null;
  setScanned: (data: string) => void;
  resetScanned: () => void;
};

export const useScanStore = create<ScanState>((set) => ({
  scanned: false,
  scannedData: null,
  setScanned: (data) => set({ scanned: true, scannedData: data }),
  resetScanned: () => set({ scanned: false, scannedData: null }),
}));
