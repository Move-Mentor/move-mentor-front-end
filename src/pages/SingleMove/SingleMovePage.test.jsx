import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleMovePage from './SingleMovePage';
import { MemoryRouter } from 'react-router-dom';

describe('Add move to class button', () => {
  test('renders with teacher role', async () => {
    render(<MemoryRouter><SingleMovePage userRole="teacher" /></MemoryRouter>);
    const button = screen.getByTestId('add-to-class-button');
    expect(button).toBeInTheDocument(); // Check if the button is in the document
  });

  test('does not render with student role', async () => {
    render(<MemoryRouter><SingleMovePage userRole="student" /></MemoryRouter>);
    const button = screen.queryByTestId('add-to-class-button');
    expect(button).not.toBeInTheDocument();
  });
});