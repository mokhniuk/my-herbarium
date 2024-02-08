import {
  Temperature,
} from '../../components/Icons';

export default {
  title: 'Components/Icons',
  component: Temperature,
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
    size: 24,
    color: "currentColor",
  },
};
