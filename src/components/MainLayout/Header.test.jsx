import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('header component', () => {
  test('renders with teacher role', async () => {
    render(<MemoryRouter><Header userRole="teacher" /></MemoryRouter>);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-teacher');
  });

  test('renders with student role', async () => {
    render(<MemoryRouter><Header userRole="student" /></MemoryRouter>);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-student');
  });
});
