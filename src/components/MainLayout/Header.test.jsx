import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('header component', () => {
  test('renders with teacher role', async () => {
    render(<Header userRole="teacher" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-teacher');
  });

  test('renders with student role', async () => {
    render(<Header userRole="student" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-student');
  });
});
