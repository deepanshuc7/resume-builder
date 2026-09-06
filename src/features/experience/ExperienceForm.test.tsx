import { beforeEach, describe, expect, it } from "vitest";
import { useResumeStore } from "../../store/resumeStore";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { ExperienceForm } from "./ExperienceForm";

describe("ExperienceForm", () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume();
  });

  it("adds a new work experience", async () => {
    const user = userEvent.setup();

    render(<ExperienceForm />);

    await user.click(screen.getByRole("button", { name: /add experience/i }));

    expect(useResumeStore.getState().resume.experience).toHaveLength(1);
  });

  it("updates an experience", async () => {
    const user = userEvent.setup();

    useResumeStore.getState().addExperience();

    render(<ExperienceForm />);

    await user.type(
      screen.getByRole("textbox", {
        name: /company/i,
      }),
      "AppTweak",
    );

    expect(useResumeStore.getState().resume.experience).toHaveLength(1);
  });
  it("updates an experience", async () => {
    const user = userEvent.setup();

    useResumeStore.getState().addExperience();

    render(<ExperienceForm />);

    await user.type(
      screen.getByRole("textbox", {
        name: /company/i,
      }),
      "AppTweak",
    );

    expect(useResumeStore.getState().resume.experience[0].company).toBe(
      "AppTweak",
    );
  });

  it("removes an experience", async () => {
    const user = userEvent.setup();

    useResumeStore.getState().addExperience();

    render(<ExperienceForm />);

    await user.click(
      screen.getByRole("button", {
        name: /remove experience/i,
      }),
    );

    expect(useResumeStore.getState().resume.experience).toHaveLength(0);
  });
});
