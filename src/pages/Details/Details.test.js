import { default as Details } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Details', () => {

  test('it renders the score', () => {
    renderWithReduxProvider(<Details />)
    const title = screen.getByText(/Details for/i);
    expect(title).toBeInTheDocument();
  });

});