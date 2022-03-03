import { default as Teacher } from '.';
import { screen } from '@testing-library/react';
import renderWithReduxProvider from '../../test/setupTests';

describe('Teacher', () => {

  test('it renders the create game button', () => {
    renderWithReduxProvider(<Teacher />)
    const button1 = screen.getByText(/Create Game/i);
    expect(button1).toBeInTheDocument();
  });

  test('it renders the set homework button', () => {
    renderWithReduxProvider(<Teacher />)
    const button2 = screen.getByText(/Set homework/i);
    expect(button2).toBeInTheDocument();
  });

  test('it renders class title', () => {
    renderWithReduxProvider(<Teacher />)
    const classTitle = screen.getByText(/Class/i);
    expect(classTitle).toBeInTheDocument();
  });

});