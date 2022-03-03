import { default as AddStudents } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('AddStudents', () => {

  test('it renders the title', () => {
    renderWithReduxProvider(<AddStudents />)
    const title = screen.getByText(/Add Student/i);
    expect(title).toBeInTheDocument();
  });

  test('it renders the form', () => {
    renderWithReduxProvider(<AddStudents />)
    const title = screen.getByText(/First Name/i);
    expect(title).toBeInTheDocument();
  });

  test('it renders the submit button', () => {
    renderWithReduxProvider(<AddStudents />)
    const title = screen.getByText(/Submit/i);
    expect(title).toBeInTheDocument();
  });

});