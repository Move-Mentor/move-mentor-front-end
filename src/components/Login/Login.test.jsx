import React from "react";
import { render, screen } from "@testing-library/react";
import HomeLayout from "../../pages/Login/Login";
import { MemoryRouter } from "react-router-dom";

describe("Left-side image component", () => {
  test("renders with teacher role", async () => {
    render(
      <MemoryRouter>
        <HomeLayout userRole="teacher" />
      </MemoryRouter>
    );
    const sideImage = screen.getByTestId("log");
    expect(sideImage).toHaveClass("left-side-image-card-teacher");
  });

  test("renders with student role", async () => {
    render(
      <MemoryRouter>
        <HomeLayout userRole="student" />
      </MemoryRouter>
    );
    const sideImage = screen.getByTestId("log");
    expect(sideImage).toHaveClass("left-side-image-card-student");
  });
});
