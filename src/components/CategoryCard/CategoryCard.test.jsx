import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import CategoryCard from "./CategoryCard";

import { categories } from "../../categories";

const firstCategory = categories[0];

describe("CategoryCard", () => {
  test("renders", async () => {
    render(
      <MemoryRouter>
        <CategoryCard {...firstCategory} />
      </MemoryRouter>
    );
    const component = await screen.findByAltText(firstCategory.altTag);
    expect(component).toBeTruthy();
  });
});
