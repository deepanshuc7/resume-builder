import { beforeEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { useResumeStore } from "../../store/resumeStore";
import { render, screen } from "@testing-library/react";
import { PersonalDetailsForm } from "./PersonalDetailsForm";

describe("PersonalDetailsForm", () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume();
  });

  it("updates personal details in the resume store", async () => {
    const user = userEvent.setup();

    render(<PersonalDetailsForm />);

    await user.type(
      screen.getByRole("textbox", { name: /full name/i }),
      "Deepanshu Chaudhary",
    );

    await user.type(
      screen.getByRole("textbox", { name: /job title/i }),
      "Software Developer",
    );

    await user.type(
      screen.getByRole("textbox", { name: /email/i }),
      "deep@example.com",
    );

    await user.type(
      screen.getByRole("textbox", { name: /phone/i }),
      "+32 123 456 789",
    );

    await user.type(
      screen.getByRole("textbox", { name: /location/i }),
      "Mechelen, Belgium",
    );

    await user.type(
      screen.getByRole("textbox", { name: /website/i }),
      "https://example.com",
    );

    await user.type(
      screen.getByRole("textbox", { name: /linkedin/i }),
      "https://linkedin.com/in/deepanshu",
    );

    const { personalDetails } = useResumeStore.getState().resume;

    expect(personalDetails).toEqual({
      fullName: "Deepanshu Chaudhary",
      jobTitle: "Software Developer",
      email: "deep@example.com",
      phone: "+32 123 456 789",
      location: "Mechelen, Belgium",
      website: "https://example.com",
      linkedin: "https://linkedin.com/in/deepanshu",
    });
  });
});
