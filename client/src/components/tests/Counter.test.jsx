import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter.jsx';

test('renders Counter without crashing', () => {
  render(<Counter />);
});

test('counter displays', () => {
  const { getByText } = render(<Counter />);
  getByText(/counter: 0/i);
});

test('button displays', () => {
  const { getByText } = render(<Counter />);
  getByText(/\+/);
});

test('button increments counter', () => {
  const { getByText } = render(<Counter />);
  const button = getByText(/\+/);
  getByText(/0/);
  fireEvent.click(button);
  getByText(/1/);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  getByText(/6/);
});
