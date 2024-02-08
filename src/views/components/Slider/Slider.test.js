import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import Slider from './Slider';
import { SunOn, SunOff } from 'views/components/Icons/index';

test('Slider should render', () => {
  render(<Slider
    sliderValue={25}
    onChange={(e) => console.log(e.target.value)}
    min={0}
    max={50}
    step={0.1}
    iconOn={<SunOn color="currentColor" />}
    iconOff={<SunOff color="currentColor" />}
    color="green"
  />)
});