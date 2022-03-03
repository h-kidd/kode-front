import { default as LoginPage } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('LoginPage', () => {

  test('it renders the title', () => {
    renderWithReduxProvider(<LoginPage />)
    const title = screen.getByText(/Kode/i);
    expect(title).toBeInTheDocument();
  });

  test('it renders student', () => {
    renderWithReduxProvider(<LoginPage />)
    const loginTitle = screen.getByText(/Student Login/i);
    expect(loginTitle).toBeInTheDocument();
  });

});