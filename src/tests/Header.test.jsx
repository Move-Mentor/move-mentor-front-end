import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/MainLayout/header';

describe('Header component', () => {
  test('renders with teacher role', async () => {
    const { debug } = render(<Header userRole="teacher" />);
    // debug();
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-teacher');
  });

  test('renders with student role', async () => {
    render(<Header userRole="student" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-student');
  });
});
