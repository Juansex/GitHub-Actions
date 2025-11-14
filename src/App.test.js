import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rick & Morty title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Rick & Morty/i);
  expect(titleElement).toBeInTheDocument();
});
