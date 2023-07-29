import React from 'react';
import { render, screen } from '@testing-library/react';
import header from './header';

describe('header component', () => {
  test('renders with teacher role', async () => {
    render(<header userRole="teacher" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-teacher');
  });

  test('renders with student role', async () => {
    render(<header userRole="student" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-student');
  });
});
