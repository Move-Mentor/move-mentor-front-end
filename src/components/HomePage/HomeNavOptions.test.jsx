import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // To extend jest-dom matchers
import HomeNavOptions, { cardsData } from './HomeNavOptions';

describe('HomeNavOptions', () => {
  test('each card has a valid route', () => {
    render(<MemoryRouter><HomeNavOptions /></MemoryRouter>);

    // Check all cards
    for (const card of cardsData) {
      const cardComponent = screen.getByText(card.name);
      expect(cardComponent).toHaveAttribute('href', card.route);
    }
    
    // // Check the first card
    // const card1 = screen.getByText(cardsData[0].name);
    // expect(card1).toHaveAttribute('href', cardsData[0].route);

    // // Check the second card
    // const card2 = screen.getByText(cardsData[1].name);
    // expect(card2).toHaveAttribute('href', cardsData[1].route);

    // // Check the third card
    // const card3 = screen.getByText(cardsData[2].name);
    // expect(card3).toHaveAttribute('href', cardsData[2].route);
  });
});

describe('Image has an alt tag for accessibility', () => {
  test('each image has an alt tag', () => {
    render(<MemoryRouter><HomeNavOptions /></MemoryRouter>);
    
    // Check the first card
    const card1Image = screen.getByAltText('Brass Monkey Extend');
    expect(card1Image).toBeInTheDocument();

    // Check the second card
    const card2Image = screen.getByAltText('Aphrodite Variation');
    expect(card2Image).toBeInTheDocument();

    // Check the third card
    const card3Image = screen.getByAltText('Splits - Felix');
    expect(card3Image).toBeInTheDocument();
  });
});