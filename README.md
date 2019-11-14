# Svea
![npm](https://img.shields.io/npm/v/svea.svg) ![Coverage Status](https://coveralls.io/repos/github/AronssonFredrik/svea/badge.svg)

Component Library for Svelte v3, documented on [Storybook](https://aronssonfredrik.github.io/svea).


## Get started

Install the dependencies...

```bash
npm install svea
```

## Accessibility
Following a philosophy of using built in web- and browser-standards and thereby not overwriting or recreating a11y support. The goal is to follow WCAG of level AA.

Do's:

:heavy_check_mark: Using the HTML5 tags semantically

:heavy_check_mark: Supporting `aria`-attributes, [read guidelines here](https://www.w3.org/TR/wai-aria-practices/)

Don't:

:x: ~~Overwrite standardise keyboard navigation~~

:x: ~~Overwrite focus-outline~~

### List of A11y interactions
| Component | Keystroke | Notes |
| :--------- | :--------- | :----- |
| Button | `enter` or `space` | activates the button |

*Continuously updated as components are created*

Follows [guidelines here](https://webaim.org/techniques/keyboard/#testing)


## Development instructions (for working in project)

### Keeping up with changelog
Commit Messages should follow following standards: 
```
type(category): description [flags]
```

Where `type` is one of the following:

* `breaking`
* `build`
* `ci`
* `chore`
* `docs`
* `feat`
* `fix`
* `other`
* `perf`
* `refactor`
* `revert`
* `style`
* `test`

### Working locally
Begin by open it in localhost:
```bash
npm run autobuild

npm run start:dev
```

### Working with storybook
To start the storybook, follow the process:
```bash
# run whenever changes are made to the components
npm run build

npm run storybook
```

When done, `npm run build-storybook` can be used to release [Storybook](https://aronssonfredrik.github.io/svea)

### Release instructions
To be continued (..)
