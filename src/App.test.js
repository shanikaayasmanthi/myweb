import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Shanika Ayasmanthi/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

