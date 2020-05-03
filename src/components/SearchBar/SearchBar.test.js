import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import './SearchBar';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('should update value of input when keyword is typed', () => {
    render(<SearchBar />);

    const searchInput = screen.getByLabelText(/search keyword/i);
    fireEvent.change(searchInput, { target: { value: 'sanam songs' } });

    expect(searchInput.value).toBe('sanam songs');
  });
});
