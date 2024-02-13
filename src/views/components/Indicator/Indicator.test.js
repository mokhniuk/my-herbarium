import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import Indicator from './Indicator';
import { Humidity } from 'views/components/Icons/index';

test('Indicator should render', () => {
  render(<Indicator title="Orchid"
    icon={<Humidity size="24" color="currentColor" />}
    value={42.5}
    measureUnit="%"
    color='pink' />);
})

test('Indicator should render correct value', () => {
  render(<Indicator title="Orchid"
    icon={<Humidity size="24" color="currentColor" />}
    value={42.5}
    measureUnit="%"
    color='pink' />);

  expect(screen.getByText('42.5')).toBeInTheDocument();
});

test('Indicator should render correct measure unit', () => {
  render(<Indicator title="Orchid"
    icon={<Humidity size="24" color="currentColor" />}
    value={42.5}
    measureUnit="%"
    color='pink' />);

  expect(screen.getByText('%')).toBeInTheDocument();
});

test('Indicator should render correct icon', () => {
  const { container } = render(<Indicator title="Orchid"
    icon={<Humidity size="24" color="currentColor" />}
    value={42.5}
    measureUnit="%"
    color='pink' />);

  const svgElement = container.querySelector('svg');
  expect(svgElement).toBeInTheDocument();
});