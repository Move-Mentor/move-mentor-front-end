// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import AddToClass from '../components/AddToClass/add_to_class';

// describe('Add move to class button', () => {
//   test('renders with teacher role', async () => {
//     render(<AddToClass userRole="teacher" />);
//     const button = screen.getByTestId('addButton');
//     expect(button).toBeInTheDocument(); // Check if the button is in the document
//   });

//   test('does not render with student role', async () => {
//     render(<AddToClass userRole="student"/>);
//     const button = screen.getByTestId('addButton');
//     expect(button).not.toBeInTheDocument();
//   });
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'; // Import renderHook from testing-library/react-hooks
import AddToClass from '../components/AddToClass/add_to_class';

describe('Add move to class button', () => {
  test('renders with teacher role', async () => {
    render(<AddToClass />);
    const button = screen.getByTestId('addButton');
    expect(button).toBeInTheDocument(); // Check if the button is in the document
  });

  test('does not render with student role', async () => {
    // Mock the state of the component using renderHook from @testing-library/react-hooks
    const { result } = renderHook(() => AddToClass()); // Render the hook
    result.current[0] = 'student'; // Set the userRole state to 'student'

    render(result.current); // Render the component with the updated state
    const button = screen.queryByTestId('addButton'); // Use queryByTestId to check if the button is not in the document
    expect(button).not.toBeInTheDocument();
  });
});
