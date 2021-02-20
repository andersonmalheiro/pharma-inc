import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  test('renders navbar correctly', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Pharma Inc.')).toBeInTheDocument();
  });
});
