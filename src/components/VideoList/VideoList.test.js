import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList';
import { searchResults } from '../MockData';

describe('VideoList component', () => {
  it('should render correct number of cards', () => {
    render(<VideoList videos={searchResults.items} />);

    const cards = screen.getAllByTestId('card-thumbnail');

    expect(cards).toHaveLength(searchResults.items.length);
  });
});
