import { default as SetHomework } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('SetHomework', () => {

  test('it renders the card title', () => {
    renderWithReduxProvider(<SetHomework />)
    const title = screen.getByText(/Homework Settings/i);
    expect(title).toBeInTheDocument();
  });

});