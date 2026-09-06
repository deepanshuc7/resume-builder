import { beforeEach, describe, expect, it } from "vitest";
import { useResumeStore } from "../../store/resumeStore";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import SummaryForm from "./SummaryForm";

describe("SummaryForm", () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume();
  });

  it("updates the professional summary", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const summaryInput = screen.getByRole("textbox", {
      name: /professional summary/i,
    });

    await user.type(
      summaryInput,
      "Software developer focused on building maintainable applications.",
    );

    expect(useResumeStore.getState().resume.summary).toBe(
      "Software developer focused on building maintainable applications.",
    );
  });
});
