import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chatbox from './Chatbox';

describe('<Chatbox />', () => {
  test('it should mount', () => {
    render(<Chatbox />);
    
    const chatbox = screen.getByTestId('Chatbox');

    expect(chatbox).toBeInTheDocument();
  });
});