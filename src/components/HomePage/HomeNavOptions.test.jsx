import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // To extend jest-dom matchers
import HomeNavOptions, { navOptions } from "./HomeNavOptions";

describe("HomeNavOptions", () => {
  test("each card has a valid route", () => {
    render(
      <MemoryRouter>
        <HomeNavOptions />
      </MemoryRouter>
    );

    // Check all cards
    for (const option of navOptions) {
      expect(screen.getByText(option.name)).toBeTruthy();
    }
  });
});

describe("Image has an alt tag for accessibility", () => {
  test("each image has an alt tag", () => {
    render(
      <MemoryRouter>
        <HomeNavOptions />
      </MemoryRouter>
    );

    // Check all cards
    for (const option of navOptions) {
      expect(screen.getByAltText(option.altTag)).toBeTruthy();
    }
  });
});
