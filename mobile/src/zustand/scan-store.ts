import { ScanState } from "@/lib/types";
import { create } from "zustand";

export const useScanStore = create<ScanState>((set) => ({
  scanned: false,
  scannedData: null,
  setScanned: (data) => set({ scanned: true, scannedData: data }),
  resetScanned: () => set({ scanned: false, scannedData: null }),
}));
