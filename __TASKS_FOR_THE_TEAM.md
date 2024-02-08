# Tasks for the team

## General

### i18n

Clarify which lib to use (react-intl or similar); what benefits, code style etc.
Replace all hardcoded text strings with translation strings. Test with 2 languages.

### Types

Context: currently code is not typed. Decide on using TypeScript or `prop-types` library for the project. Refactor code, apply selected solution.
Attention: Better done at early stages while other tasks for this project are not yet started or on hold.

### Update Stories

Check existing components for missing states. Add all icons.

### Dynamic ID for flowers

Use something like uuid generator for id's on flowers.js

### Update tests

Update tests for existing componetns

### Refactor styles

Refacor colors, check sizes units. Replace values with variables.

### Light mode toggle

Context: there is no toggle in design yet. Clarify; implement toggle
<https://blog.logrocket.com/dark-mode-react-in-depth-guide/>

### Fonts

Replace Google fonts with locally loaded fonts.

### Error screens

Prepare error screens (including "Page not found" and static html for server error).

### Paths config

Create path config to store all app routes when we'll clarify the flow.

### Accessibility

Improve semantics and accessibility of components.
Current state: basic keyboard navigation possible;

### Slider accessibility

Investigate if we need to use some well-thought out slider component library or is it enough to improve custom component.

### Loader

At some point there will be more then 5 flowers in the list, loading may become slow. Implement a solution for list loader.

### SPA

Add service workers.

### Add `Sample Component` directory

Add sample component directory with js, scss, test and story files with some snippets. Make it CLI.

### Storybook addons

Check addons that may be usefull, add dependencies. Test to see if they work as expected and are usefull as described.
