import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders calculator C button successfully', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/C/i);
  expect(linkElement).toBeInTheDocument();
});
