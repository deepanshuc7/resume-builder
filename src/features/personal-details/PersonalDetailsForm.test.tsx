import { beforeEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { useResumeStore } from "../../store/resumeStore";
import { render, screen } from "@testing-library/react";
import { PersonalDetailsForm } from "./PersonalDetailsForm";

describe("PersonalDetailsForm", () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume();
  });

  it("updates the full name in the resume store", async () => {
    const user = userEvent.setup();

    render(<PersonalDetailsForm />)

    const fullNameInput = screen.getByRole('textbox', {
        name: /full name/i,
    })

    await user.type(fullNameInput, 'Deepanshu Chaudhary')

    expect(useResumeStore.getState().resume.personalDetails.fullName,).toBe('Deepanshu Chaudhary')
  });
});
