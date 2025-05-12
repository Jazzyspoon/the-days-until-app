import { render, screen } from '@testing-library/react';
import MainPage from './App';

test('renders app header', () => {
  render(<MainPage />);
  const headerElement = screen.getByText(/The Days Left Until/i);
  expect(headerElement).toBeInTheDocument();
});
