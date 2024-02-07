import React from 'react';
import styles from './slider.module.scss';
import classNames from 'classnames';

// TODO: add + - key functionality

const Slider = ({
  sliderValue,
  onChange,
  min = 0,
  max = 100,
  step = 0.1,
  color,
  iconOff,
  iconOn,
}) => {
  const sliderClassNames = classNames(styles.slider, {
    [styles[`${color}`]]: color,
  });

  return (
    <label className={styles.wrapper}>
      {/* make it "minus" button */}
      {iconOff}
      <input
        type="range"
        value={sliderValue}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className={sliderClassNames}
      />
      {/* make it "plus" button */}
      {iconOn}
    </label>
  );
};

export default Slider;
