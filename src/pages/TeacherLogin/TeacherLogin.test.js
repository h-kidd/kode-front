import { default as TeacherLogin } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('TeacherLogin', () => {

  test('it renders the title', () => {
    renderWithReduxProvider(<TeacherLogin />)
    const title = screen.getByText(/Kode/i);
    expect(title).toBeInTheDocument();
  });

  test('it renders student', () => {
    renderWithReduxProvider(<TeacherLogin />)
    const loginTitle = screen.getByText(/Teacher Login/i);
    expect(loginTitle).toBeInTheDocument();
  });

});