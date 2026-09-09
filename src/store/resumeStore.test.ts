import { beforeEach, describe, expect, it } from "vitest";
import { useResumeStore } from "./resumeStore";

describe("resumeStore", () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume();
  });

  it("updates personal details", () => {
    useResumeStore.getState().updatePersonalDetails({
      fullName: "Deepanshu Chaudhary",
      jobTitle: "Software Developer",
    });

    const { personalDetails } = useResumeStore.getState().resume;

    expect(personalDetails.fullName).toBe("Deepanshu Chaudhary");
    expect(personalDetails.jobTitle).toBe("Software Developer");
  });

  it("updates the professional summary", () => {
    useResumeStore
      .getState()
      .updateSummary(
        "Frontend developer with experience building accessible web applications.",
      );

    expect(useResumeStore.getState().resume.summary).toBe(
      "Frontend developer with experience building accessible web applications.",
    );
  });

  it("adds a work experience", () => {
    useResumeStore.getState().addExperience();

    expect(useResumeStore.getState().resume.experience).toHaveLength(1);
  });

  it("updates a work experience", () => {
    useResumeStore.getState().addExperience();

    const experience = useResumeStore.getState().resume.experience[0];

    useResumeStore.getState().updateExperience(experience.id, {
      company: "AppTweak",
      position: "Software Engineer Intern",
    });

    const updatedExperience = useResumeStore.getState().resume.experience[0];

    expect(updatedExperience.company).toBe("AppTweak");
    expect(updatedExperience.position).toBe("Software Engineer Intern");
  });

  it("removes a work experience", () => {
    useResumeStore.getState().addExperience();

    const experience = useResumeStore.getState().resume.experience[0];

    useResumeStore.getState().removeExperience(experience.id);

    expect(useResumeStore.getState().resume.experience).toHaveLength(0);
  });

  it("adds an education entry", () => {
    useResumeStore.getState().addEducation();

    expect(useResumeStore.getState().resume.education).toHaveLength(1);
  });

  it("updates an education entry", () => {
    useResumeStore.getState().addEducation();

    const education = useResumeStore.getState().resume.education[0];

    useResumeStore.getState().updateEducation(education.id, {
      institution: "Thomas More",
      degree: "International Digital Experience Design",
    });

    const updatedEducation = useResumeStore.getState().resume.education[0];

    expect(updatedEducation.institution).toBe("Thomas More");
    expect(updatedEducation.degree).toBe(
      "International Digital Experience Design",
    );
  });

  it("removes an education entry", () => {
    useResumeStore.getState().addEducation();

    const education = useResumeStore.getState().resume.education[0];

    useResumeStore.getState().removeEducation(education.id);

    expect(useResumeStore.getState().resume.education).toHaveLength(0);
  });
});
