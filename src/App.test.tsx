import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the resume builder heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /resume builder/i,
      }),
    ).toBeInTheDocument();
  });
});
