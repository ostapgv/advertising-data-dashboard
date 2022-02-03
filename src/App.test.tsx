import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard', () => {
  render(<App />);
  const linkElement = screen.getByText(/Adverity Advertising Data ETL-V Challenge/i);

  expect(linkElement).toBeInTheDocument();
});
