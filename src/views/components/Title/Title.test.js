import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Title from './Title';

it('Title renders text', () => {
  render(<Title>Hello world</Title>);
  expect(screen.getByText('Hello world')).toBeInTheDocument();
});