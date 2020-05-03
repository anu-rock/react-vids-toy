import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';
import { searchResults } from '../MockData';

describe('VideoCard component', () => {
  const video = searchResults.items[0];

  it('should render correct thumbnail and title', () => {
    render(<VideoCard video={video} />);

    expect(screen.getByTestId('card-thumbnail')).toBeTruthy();
    expect(screen.getByText(video.snippet.title)).toBeTruthy();
  });
});
