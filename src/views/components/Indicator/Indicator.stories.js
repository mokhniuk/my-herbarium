import React from 'react';
import Card from '../Card/Card';
import Indicator from './Indicator';
import {
  Temperature,
  Humidity
} from 'views/components/Icons/index';

export default {
  title: 'Components/Indicator',
  component: Indicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    icon: <Temperature size="24" color="currentColor" />,
    value: 24.5,
    measureUnit: "°C",
    color: 'pink',
  },
};

export const DefaultCard = () => (
  <Card title="Orchid"
    temperature={24.5}
    humidity={50}
    color='pink'
    image='orchid'
    open='false' />
);

export const OpenCard = () => (
  <Card title="Orchid"
    temperature={24.5}
    humidity={50}
    color='pink'
    image='orchid'
    open='true' />
);

export const DefaultIndicator = () => (
  <Indicator title="Orchid"
    icon={<Humidity size="24" color="currentColor" />}
    value={42.5}
    measureUnit="%"
    color='pink' />
);

export const LargeValueIndicator = () => (
  <Indicator title="Orchid"
    icon={<Humidity size="24" color="currentColor" />}
    value={100}
    measureUnit="%"
    color='pink' />
);