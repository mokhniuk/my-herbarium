import React from 'react';
import classNames from 'classnames';
import styles from './indicator.module.scss';

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
