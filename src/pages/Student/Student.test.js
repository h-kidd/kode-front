import { default as Student } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Teacher', () => {

  test('it renders the join game button', () => {
    renderWithReduxProvider(<Student />)
    const button1 = screen.getByText(/Join game/i);
    expect(button1).toBeInTheDocument();
  });

  test('it renders the view scores button', () => {
    renderWithReduxProvider(<Student />)
    const button2 = screen.getByText(/View scores/i);
    expect(button2).toBeInTheDocument();
  });

  test('it renders homework title', () => {
    renderWithReduxProvider(<Student />)
    const classTitle = screen.getByText(/Homework/i);
    expect(classTitle).toBeInTheDocument();
  });

});