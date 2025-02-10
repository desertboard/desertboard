import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TempImageStore {
  tempHistoryImage: string;
  tempPartnerImage: string;
  setTempHistoryImage: (image: string) => void;
  setTempPartnerImage: (image: string) => void;
  clearTempHistoryImage: () => void;
  clearTempPartnerImage: () => void;
}



export const useTempImageStore = create<TempImageStore>()(
    persist(
      (set) => ({
        tempHistoryImage: "",  // Stores temporary uploaded history image
        tempPartnerImage: "",  // Stores temporary uploaded partner image
        setTempHistoryImage: (image) => set({ tempHistoryImage: image }),
        setTempPartnerImage: (image) => set({ tempPartnerImage: image }),
        clearTempHistoryImage: () => set({ tempHistoryImage: "" }),
        clearTempPartnerImage: () => set({ tempPartnerImage: "" }),
      }),
      { name: "temp-image-storage" } // Key for localStorage persistence
    )
  );