import { create } from "zustand";
import { initialResume } from "../data/initialResume";
import type { PersonalDetails, Resume } from "../types/resume";

interface ResumeStore {
  resume: Resume;
  updatePersonalDetails: (details: Partial<PersonalDetails>) => void;
  resetResume: () => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: structuredClone(initialResume),

  updatePersonalDetails: (details) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalDetails: {
          ...state.resume.personalDetails,
          ...details,
        },
      },
    })),

  resetResume: () => set({ resume: structuredClone(initialResume) }),
}));
