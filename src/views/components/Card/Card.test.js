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