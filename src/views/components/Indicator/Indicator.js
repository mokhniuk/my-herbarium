import React from 'react';
import styles from './indicator.module.scss';
import classNames from 'classnames';

const Indicator = ({ icon, value, measureUnit, color }) => {
  const indicatorClassNames = classNames(styles.indicator, {
    [styles[`${color}`]]: color,
  });

  return (
    <span className={indicatorClassNames}>
      {icon && icon}
      {value.toFixed(1)}
      {measureUnit && measureUnit}
    </span>
  );
};

export default Indicator;
