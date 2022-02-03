# Advertising Data ETL-V challenge app

CreateReactApp-based web application that:
- fetches advertising data from a given endpoint,
- visualize it on a simple interactive dashboard.

## Running and testing locally

- Run `yarn` in the project root folder to install necessary dependencies.
- Run `yarn start` to start application locally.
- Run `yarn test` to run the tests and generate coverage report.
- Run `yarn test:watch` to run the tests in watch mode.
- The rest repeats scripts available in Create React App template. You can check more details [here](https://create-react-app.dev/docs/available-scripts).

## Tech stack

- [React v17](reactjs.org) and [Create React App](https://github.com/facebook/create-react-app) as a basis for the app.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit/integration testing.
- [Papa Parse](https://www.papaparse.com/) for scv file parsing.
- [Chart.js](https://www.chartjs.org/) for data visualisation.
- [Typescript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Sass](https://sass-lang.com/) e.g.

## More technical details
- Used mobile-first approach for responsiveness.
- Used simplified layout based on the flexbox.
- Used simplified breakpoints version.
- Applied BEM (no extra setup made for styled components or css modules).
- Used data decimation for performance reasons.
- Didn't include any additional UI library for sake of simplification and again, performance reasons. There's a better option with the autocomplete support and data virtualization, but simpler version is chosen.
- Routing, Error handling, project structure for different pages, jsdoc, proper jest config etc. are out of scope.
- Used simple version for css normalizing.

## Project structure

```
src/                          - source code root  
  components/                 - folder with all the components
    SomeComponent/            - component folder example, can contain component itself, styles, tests, locally used hooks, mocks, configs, utils etc.
      __tests__/              - contain tests if there are more than one ts/tsx file in the folder (for more clear structure)
      __mocks__/              - contains component's mock implementation
      SomeComponent.tsx       - component itself
      SomeComponent.text.tsx  - test
      SomeComponent.scss      - component styling
    sdk/                      - common reusable components like Input, Dopdown etc. The same sub-structure as in `components/` folder.
    hooks/                    - custom hooks
    utils/                    - utils splitted by the purpose
```
This structure can be extended in case of further development.

