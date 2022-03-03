import { default as Questions } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Questions', () => {

  test('it renders the score', () => {
    renderWithReduxProvider(<Questions />)
    const title = screen.getByText(/Score/i);
    expect(title).toBeInTheDocument();
  });

});