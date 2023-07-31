// Write a test for routes

// Write a test to check the route based on who is logged in

import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionsNav from './OptionsCards';

describe('header component', () => {
  test('renders with teacher role', async () => {
    render(<OptionsNav userRole="teacher" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-teacher');
  });

  test('renders with student role', async () => {
    render(<OptionsNav userRole="student" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-student');
  });
});
