import React, { useState, useEffect } from 'react';
import styles from './card.module.scss';
import classNames from 'classnames';

import {
  Temperature,
  Humidity,
  SunOff,
  SunOn,
  WaterOff,
  WaterOn,
} from '../../components/Icons/index';
import Slider from '../../components/Slider/Slider';
import Indicator from '../../components/Indicator/Indicator';

const Card = ({
  title,
  // description,
  temperature,
  humidity,
  color,
  image,
  open,
  onClick,
  // simple = false,
}) => {
  const cardClassNames = classNames(styles.card, {
    [styles[`${color}`]]: color,
  });

  const [isOpened, setIsOpened] = useState(open);

  const [temperatureValue, setTemperatureValue] = useState(
    temperature.toFixed(1)
  );
  const [humidityValue, setHumidityValue] = useState(humidity.toFixed(1));

  return (
    <div className={cardClassNames}>
      <button className={styles.header} onClick={() => setIsOpened(!isOpened)}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          <ul className={styles['tags-list']}>
            <li className={styles.tag}>
              <Indicator
                icon={<Temperature size="24" color="currentColor" />}
                value={temperatureValue}
                measureUnit="°C"
                color={color}
              />
            </li>
            <li className={styles.tag}>
              <Indicator
                icon={<Humidity size="24" color="currentColor" />}
                value={humidityValue}
                measureUnit="%"
                color={color}
              />
            </li>
          </ul>
        </div>

        {image && (
          <figure className={styles.figure}>
            <img
              src={`images/${image}.png`}
              alt={title}
              width="136px"
              height="136px"
              className={styles.image}
              loading="lazy"
            />
          </figure>
        )}
      </button>

      {isOpened && (
        <section className={styles.details}>
          <Slider
            sliderValue={temperatureValue}
            onChange={(e) => setTemperatureValue(e.target.value)}
            min="0"
            max="50"
            step="0.1"
            iconOn={<SunOn color="currentColor" />}
            iconOff={<SunOff color="currentColor" />}
            color={color}
          />

          <Slider
            sliderValue={humidityValue}
            onChange={(e) => setHumidityValue(e.target.value)}
            min="0"
            max="100"
            step="0.1"
            iconOn={<WaterOn color="currentColor" />}
            iconOff={<WaterOff color="currentColor" />}
            color={color}
          />
        </section>
      )}
    </div>
  );
};

export default Card;
