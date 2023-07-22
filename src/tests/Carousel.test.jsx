import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToClass from '../components/AddToClass/add_to_class';

describe('Add move to class button', () => {
  test('renders with teacher role', async () => {
    render(<AddToClass userRole="teacher" />);
    const button = screen.getByTestId('addButton');
    expect(button).toBeInTheDocument(); // Check if the button is in the document
  });

  test('does not render with student role', async () => {
    render(<AddToClass userRole="student"/>);
    const button = screen.getByTestId('addButton');
    expect(button).toBeNull();
  });
});
