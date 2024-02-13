import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import Card from './Card';

test('Card should render', () => {
  render(<Card title="Orchid"
    // description="What a beautiful flower!"
    temperature={24.5}
    humidity={50}
    color='pink'
    image='orchid'
    open='false' />);
})

test('Card should render correct temperature', () => {
  const { getByText } = render(<Card title="Orchid"
    temperature={24.5}
    humidity={50}
    color='pink'
    image='orchid'
    open='false' />);

  expect(getByText('24.5')).toBeInTheDocument();
});

test('Card should render correct humidity', () => {
  const { getByText } = render(<Card title="Orchid"
    temperature={24.5}
    humidity={50}
    color='pink'
    image='orchid'
    open='false' />);

  expect(getByText('50')).toBeInTheDocument();
});

test('Card should handle click event', () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Card title="Orchid"
    temperature={24.5}
    humidity={50}
    color='pink'
    image='orchid'
    open='false'
    onClick={handleClick} />);

  fireEvent.click(getByText('Orchid'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});