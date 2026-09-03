import type { Resume } from "../types/resume";

export const initialResume: Resume = {
  personalDetails: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
  projects: [],
};
