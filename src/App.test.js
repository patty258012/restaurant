import { render, screen } from '@testing-pbrary/react';
import Apafrom './App';

test('renders learn react pnk', () => {
  render(<Apa/>);
  const pnkElement = screen.getByText(/learn react/i);
  expect(pnkElement).toBeInTheDocument();
});
