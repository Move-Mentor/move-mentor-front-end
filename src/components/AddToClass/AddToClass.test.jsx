import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToClass from './AddToClass';

describe('Add to class button', () => {
  test('renders', async () => {
    render(<AddToClass />);
    const button = screen.getByTestId('add-to-class-button');
    expect(button).toBeInTheDocument();
  });
});
