// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeNavOptions from './HomeNavOptions';

describe('HomeNavOptions', () => {
  const mockData = {
    name: 'TestCard',
    image: 'test-image-url.png',
    route: '/test',
    color: '#ffffff',
  }


it('renders the card with correct name', () => {
  render(<HomeNavOptions {...mockData} />);
  const cardName = screen.getByText(mockData.name);
  expect(cardName).toBeInTheDocument();
});

// it('renders the card with correct image', () => {
//   render(<HomeNavOptions {...mockData} />);
//   const cardImage = screen.getByAltText(mockData.name);
//   expect(cardImage.src).toBe(mockData.image);
// });

}
)