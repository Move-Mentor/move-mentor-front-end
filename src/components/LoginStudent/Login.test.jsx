// Import necessary testing libraries
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // To use additional matchers like toBeInTheDocument

// Import the LoginForm component (replace with the actual import path)
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('does not display any error messages for valid inputs', () => {
    render(<LoginForm />);

    // Find the email input field and type a valid email
    const emailInput = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });

    // Find the password input field and type a valid password
    const passwordInput = screen.getByTestId('Password'); // Replace 'Password' with the actual label text
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });

    // Find the submit button and click it
    const submitButton = screen.getByRole('button', { name: 'Login' }); // Replace 'Login' with the actual button text
    fireEvent.click(submitButton);

    // Assert that no error messages are displayed
    const errorText = screen.queryByText(/error/i); // Use queryByText to check for the absence of error messages
    expect(errorText).not.toBeInTheDocument();
  });
});