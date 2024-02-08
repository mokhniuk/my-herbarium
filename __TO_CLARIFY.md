# To clarify

## Design

1. Clarify other text styles (titles, body and lead text styles etc).
2. Do we have an idea of what the app flow looks like? Which screens are expected to be added?
3. Will there be a toggle to switch between lighting modes, or do we want to keep it dependent on user preferences in the operating system?
4. What's with flower descriptions? Will there be a scenario when we show them? Does it make sense to have a separate button for flower info?
5. In which cases flower images will be shown? Can we define the approximate sizes we'll need for each image?
6. Settings in the Card component in `Components` use a dark background instead of a consistent 20% white overlay in the rest of them in the prototype. Should we hardcode a few colour schemes or convert all colours to something like HSLa/RGBa and automatically set every colour of a component depending on the one given?
7. Is it a good idea to keep all `menu` (or `details` in dev) sections shown in anything bigger than a phone? Otherwise, we'll look into something like Masonry layout. Will there be more than two sliders for a flower and scenarios where there will be just one slider for some?
8. What are slider steps min/max and step values? Do we want to always show decimals in `Indicator`? The font variation for zero didn't work. Do we want to investigate more, use monowidth font (only in this one place for now, so not really convenient), or leave it simply as is?
9. Favicons and app icons. For now, I have generated basic ones using the cover of the Figma file.
10. Will there be scenarios when we don't have a picture of the flower?
11. Tablet and desktop behavior.
12. Do we want to show values of slider?

## PM, Designer, Researcher

- Do we need a landing page(s) for this app?
- What are next major features (screens) we want to concentrate on?
- What type of user settings do we want to have?
- What audiences will we target? Do we want to keep app just in English?
- Do we need to prepare templates for pages like Privacy Policy, Imprint, Terms and Conditions?
- Will we target desktop?
- Do we want component library of this project to be reusable on other projects?
