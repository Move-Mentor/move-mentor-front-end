import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderTop from './HeaderTop';

describe('Header component', () => {
  test('renders with teacher role', async () => {
    render(<HeaderTop userRole="teacher" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-teacher');
  });

  test('renders with student role', async () => {
    render(<HeaderTop userRole="student" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-student');
  });
});