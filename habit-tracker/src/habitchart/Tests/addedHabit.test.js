import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Habits from '../habits';


test('habit added', () => {
  render(<Habits />);

  const habit = screen.getByTestId('habit');
  expect(habit).toBeInTheDocument();
});
