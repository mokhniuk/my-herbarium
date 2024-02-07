import Slider from './Slider';
import {
    Temperature,
    Humidity,
    SunOff,
    SunOn,
    WaterOff,
    WaterOn,
} from '../../components/Icons/index';

export default {
    title: 'Components/Slider',
    component: Slider,
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
        sliderValue: 24.5,
        onChange: (value) => console.log(value),
        min: "0",
        max: "50",
        step: "0.1",
        iconOn: <SunOn color="currentColor" />,
        iconOff: <SunOff color="currentColor" />,
        color: 'pink'
    },
};
