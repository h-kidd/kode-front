import { default as Settings } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Teacher', () => {

  test('it renders start a game', () => {
    renderWithReduxProvider(<Settings />)
    const title = screen.getByText(/Start a Game/i);
    expect(title).toBeInTheDocument();
  });

  test('it renders quiz settings', () => {
    renderWithReduxProvider(<Settings />)
    const title2 = screen.getByText(/Quiz Settings/i);
    expect(title2).toBeInTheDocument();
  });

});