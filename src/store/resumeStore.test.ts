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
});
