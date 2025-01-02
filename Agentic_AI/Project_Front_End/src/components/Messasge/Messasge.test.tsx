import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Messasge from './Messasge';

describe('<Messasge />', () => {
  test('it should mount', () => {
    render(<Messasge />);
    
    const messasge = screen.getByTestId('Messasge');

    expect(messasge).toBeInTheDocument();
  });
});