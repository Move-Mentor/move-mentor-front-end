// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import SingleMovePage from './SingleMovePage';

// describe('Add move to class button', () => {
//   test('renders with teacher role', async () => {
//     render(<SingleMovePage userRole="teacher" />);
//     const button = screen.getByTestId('add-to-class-button');
//     expect(button).toBeInTheDocument(); // Check if the button is in the document
//   });

//   test('does not render with student role', async () => {
//     render(<SingleMovePage userRole="student"/>);
//     const button = screen.queryByTestId('add-to-class-button');
//     expect(button).not.toBeInTheDocument();
//   });
// });