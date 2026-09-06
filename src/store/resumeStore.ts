import { create } from "zustand";
import { initialResume } from "../data/initialResume";
import type { Experience, PersonalDetails, Resume } from "../types/resume";

interface ResumeStore {
  resume: Resume;
  updatePersonalDetails: (details: Partial<PersonalDetails>) => void;
  updateSummary: (summary: string) => void;
  addExperience: () => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
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

  updateSummary: (summary) =>
    set((state) => ({
      resume: {
        ...state.resume,
        summary,
      },
    })),

  addExperience: () =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: [
          ...state.resume.experience,
          {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
          },
        ],
      },
    })),

  updateExperience: (id, experience) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.map((item) =>
          item.id === id ? { ...item, ...experience } : item,
        ),
      },
    })),
  removeExperience: (id) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.experience.filter((item) => item.id !== id),
      },
    })),

  resetResume: () => set({ resume: structuredClone(initialResume) }),
}));
