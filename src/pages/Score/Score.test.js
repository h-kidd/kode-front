import { default as Score } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Score', () => {

  test('it renders the title', () => {
    renderWithReduxProvider(<Score />)
    const title = screen.getByText(/Scores/i);
    expect(title).toBeInTheDocument();
  });

});