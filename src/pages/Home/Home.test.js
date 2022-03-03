import { default as Home } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Home', () => {

  test('it renders the title', () => {
    renderWithReduxProvider(<Home />)
    const title = screen.getByText(/Kode/i);
    expect(title).toBeInTheDocument();
  });

});