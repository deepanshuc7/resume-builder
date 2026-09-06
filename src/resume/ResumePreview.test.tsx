import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { useResumeStore } from "../store/resumeStore";
import { ResumePreview } from "./ResumePreview";

describe("ResumePreview", () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume();
  });

  it("displays personal details from the store", () => {
    useResumeStore.getState().updatePersonalDetails({
      fullName: "Deepanshu Chaudhary",
      jobTitle: "Software Developer",
      email: "deep@example.com",
      phone: "+32 123 456 789",
      location: "Mechelen, Belgium",
      website: "https://example.com",
      linkedin: "https://linkedin.com/in/deepanshu",
    });

    render(<ResumePreview />);

    expect(
      screen.getByRole("heading", {
        name: "Deepanshu Chaudhary",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Software Developer")).toBeInTheDocument();
    expect(screen.getByText("deep@example.com")).toBeInTheDocument();
    expect(screen.getByText("+32 123 456 789")).toBeInTheDocument();
    expect(screen.getByText("Mechelen, Belgium")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "example.com" })).toHaveAttribute(
      "href",
      "https://example.com",
    );

    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/deepanshu",
    );
  });

  it("displays the professional summary", () => {
    useResumeStore
      .getState()
      .updateSummary(
        "Software developer focused on clean and maintainable code.",
      );

    render(<ResumePreview />);

    expect(
      screen.getByText(
        "Software developer focused on clean and maintainable code.",
      ),
    ).toBeInTheDocument();
  });

  it("displayes work experience", () => {
    useResumeStore.getState().addExperience();

    const experience = useResumeStore.getState().resume.experience[0];

    useResumeStore.getState().updateExperience(experience.id, {
      company: "AppTweak",
      position: "Software Engineer Intern",
      location: "Brussels",
      startDate: "2025-02",
      endDate: "2025-05",
      description:
        "Worked on production features using React and Ruby on Rails.",
    });

    render(<ResumePreview />);

    expect(screen.getByText("Software Engineer Intern")).toBeInTheDocument();

    expect(screen.getByText("AppTweak")).toBeInTheDocument();

    expect(screen.getByText("Brussels")).toBeInTheDocument();

    expect(
      screen.getByText(
        "Worked on production features using React and Ruby on Rails.",
      ),
    ).toBeInTheDocument();
  });
});
