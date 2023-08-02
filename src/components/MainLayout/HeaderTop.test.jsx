import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderTop from './HeaderTop';
import {MemoryRouter} from '@testing-library/jest-dom';

describe('Header component', () => {
  test('renders with teacher role', async () => {
    render(<MemoryRouter><HeaderTop userRole="teacher" /></MemoryRouter>);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-teacher');
  });

  test('renders with student role', async () => {
    render(<HeaderTop userRole="student" />);
    const navBar = screen.getByTestId('nav');
    expect(navBar).toHaveClass('header-student');
  });
});

