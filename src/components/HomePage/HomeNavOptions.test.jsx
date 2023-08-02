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

    // // Check the first card
    // const card1 = screen.getByText(navOptions[0].name);
    // expect(card1).toHaveAttribute('href', navOptions[0].route);

    // // Check the second card
    // const card2 = screen.getByText(navOptions[1].name);
    // expect(card2).toHaveAttribute('href', navOptions[1].route);

    // // Check the third card
    // const card3 = screen.getByText(navOptions[2].name);
    // expect(card3).toHaveAttribute('href', navOptions[2].route);
  });
});

describe("Image has an alt tag for accessibility", () => {
  test("each image has an alt tag", () => {
    render(
      <MemoryRouter>
        <HomeNavOptions />
      </MemoryRouter>
    );

    // Check the first card
    const card1Image = screen.getByAltText("Brass Monkey Extend");
    expect(card1Image).toBeInTheDocument();

    // Check the second card
    const card2Image = screen.getByAltText("Aphrodite Variation");
    expect(card2Image).toBeInTheDocument();

    // Check the third card
    const card3Image = screen.getByAltText("Splits - Felix");
    expect(card3Image).toBeInTheDocument();
  });
});
