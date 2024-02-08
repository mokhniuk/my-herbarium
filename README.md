# My Herbarium

The My Herbarium application will allow users to monitor their plants at home via dedicated IOT sensors. Users will be able to add and remove plants, associate temperature and humidity sensors, and adjust each plant’s light and humidity levels.

## How to run

`yarn install` or `npm install`

After installation is finished, run:

`yarn start` or `npm start`

That's it.

## Testing

To run all tests:
```yarn test```

## Features

1. Supports dark mode (detects user preferred settings in operating system);
2. Data stored on the device (using localStorage);
3. Displaying 5 hardcoded flowers;
4. Clicking anywhere on a card expands it and displays the adjustment sliders;
5. Clicking anywhere on the top part of an expanded card collapses it;
6. Basic mobile and tablet/desktop styling;
7. On loading expand all cards if not mobile view

## What's used

- `css-modules` and `classnames` for styles
- `testing-library` for tests
- `storybook` for UI documentation representation

## Known issues

1. No Light/Dark mode switcher;
2. Flowers detailed description not used;
3. Images stored in one size;
4. Screenreader will read the alt of images same as title / possibly exclude from voiceover;
5. Rerfactor components (Title);

## Planned in next updates

1. i18n
2. PropTypes
