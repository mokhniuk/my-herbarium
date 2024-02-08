import Indicator from './Indicator';
import {
  Temperature,
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
