import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // To extend jest-dom matchers
import HomeNavOptions from './HomeNavOptions';

describe('HomeNavOptions', () => {
  test('each card has a valid route', () => {
    render(<HomeNavOptions />);
    
    // Check the first card
    const card1 = screen.getByText('New Student Register');
    expect(card1).toHaveAttribute('href', '/card1');

    // Check the second card
    const card2 = screen.getByText('Student Login');
    expect(card2).toHaveAttribute('href', '/card2');

    // Check the third card
    const card3 = screen.getByText('Teacher Login');
    expect(card3).toHaveAttribute('href', '/card3');
  });
});

describe('Image has an alt tag for accessibility', () => {
  test('each image has an alt tag', () => {
    render(<HomeNavOptions />);
    
    // Check the first card
    const card1Image = screen.getByAltText('Brass Monkey Extend');
    expect(card1Image).toBeInTheDocument();

    // Check the second card
    const card2Image = screen.getByAltText('Aphrodite Variaion');
    expect(card2Image).toBeInTheDocument();

    // Check the third card
    const card3Image = screen.getByAltText('Splits - Felix');
    expect(card3Image).toBeInTheDocument();
  });
});