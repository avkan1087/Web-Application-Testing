import React from 'react';
import { render } from '@testing-library/react';
import App, from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("App render", () => {
  render(<App />);
});

test(" buttons render", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/strikes/i);
  getByTestId(/balls/i);
  getByTestId(/fouls/i);
  getByTestId(/hits/i);
});

test("couter render", () => {
  const { getByText } = render(<App />);

  getByText(/strikes/i);
  getByText(/balls/i);
});



