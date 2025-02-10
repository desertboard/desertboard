import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Finish {
  title: string;
  image_url: string;
}

interface Application {
  title: string;
  description: string;
  finishes: Finish[];
}

interface SectorFormState {
  title: string;
  description: string;
  image_url: string;
  applications: Application[];
  tempFinishes: Finish[];
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setImageUrl: (image_url: string) => void;
  addApplication: (application: Application) => void;
  addFinishToApplication: (applicationIndex: number, finish: Finish) => void;
  addTempFinish: (finish: Finish) => void;
  clearTempFinishes: () => void;
  clearApplications: () => void;
  clearAll: () => void;
  setApplications: (applications: Application[]) => void;
}




export const useSectorStore = create<SectorFormState>()(
  persist(
    (set) => ({
      title: "",
      description: "",
      image_url: "",
      applications: [],
      tempFinishes: [],
      setTitle: (title) => set({ title }),
      setDescription: (description) => set({ description }),
      setImageUrl: (image_url) => set({ image_url }),
      addApplication: (application) =>
        set((state) => ({
          applications: [...state.applications, application],
          tempFinishes: [], // Clear temp finishes after adding application
        })),
      addFinishToApplication: (applicationIndex, finish) =>
        set((state) => ({
          applications: state.applications.map((app, index) =>
            index === applicationIndex ? { ...app, finishes: [...app.finishes, finish] } : app
          ),
        })),
      addTempFinish: (finish) =>
        set((state) => ({
          tempFinishes: [...state.tempFinishes, finish],
        })),
      clearTempFinishes: () => set({ tempFinishes: [] }),
      clearApplications: () => set({ applications: [], tempFinishes: [] }),
      clearAll: () => set({ title: "", description: "", image_url: "", applications: [], tempFinishes: [] }),
      setApplications: (applications) => set({ applications }),
    }),
    {
      name: "sector-storage",
    }
  )
);



