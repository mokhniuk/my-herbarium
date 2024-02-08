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