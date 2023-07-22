import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/AddToClass/add_to_class';

describe('Carsousel component', () => {
  test('renders with teacher role', async () => {
    render(<Button userRole="teacher" />);
    const button = screen.getByTestId('addButton');
    expect(button).toDisplay('AddToClass');
  });

  test('not render with student role', async () => {
    render(<Button userRole="student" />);
    const button = screen.getByTestId('addButton');
    expect(button).toNotDisplay('AddToClass');
  });
});
