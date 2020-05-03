import React from 'react';
import { render, wait, fireEvent, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import youtube from '../api/youtube';
import App from './App';
import { searchResults } from './MockData';

const mockYoutube = new MockAdapter(youtube);

describe('App component', () => {
  it('should display search results correctly', async () => {
    render(<App />);

    mockYoutube.onGet('/search').reply(200, searchResults);

    const searchInput = screen.getByLabelText(/search keyword/i);
    fireEvent.change(searchInput, { target: { value: 'sanam songs' } });

    const searchForm = screen.getByTestId('form');
    fireEvent.submit(searchForm);

    await wait(() =>
      expect(screen.getAllByTestId('card-thumbnail')).toHaveLength(
        searchResults.items.length
      )
    );
  });

  it('should update selected video', async () => {
    render(<App />);

    mockYoutube.onGet('/search').reply(200, searchResults);

    const searchInput = screen.getByLabelText(/search keyword/i);
    fireEvent.change(searchInput, { target: { value: 'sanam songs' } });

    const searchForm = screen.getByTestId('form');
    fireEvent.submit(searchForm);

    await wait();

    const secondCard = screen.getAllByTestId('card-title')[1];
    fireEvent.click(secondCard);

    await wait(() =>
      expect(screen.getByTestId('detail-title').textContent).toBe(
        secondCard.textContent
      )
    );
  });
});
