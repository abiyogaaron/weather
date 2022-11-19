# Weather Simple Apps

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Project Information
- typescript
- eslint, husky, lint-staged
- redux@toolkit
- styled-components
- moment
- axios
- fontawesome
- typescript
- msw

Before run the project the requirement of this project is node version greater than 16
and typescript greater than 4.x.x

this project is using mock service worker, to use real API you must set the `USE_MOCK` variable in
`Constants` folder inside `index.ts` into false.

## Production site
Open [https://my-weather-sjyv5.ondigitalocean.app/](https://my-weather-sjyv5.ondigitalocean.app/) to view it.

## Available Scripts
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Runs the eslinter (rules: .eslintrc) and (ignore: .eslintignore)

### `npm run lint --fix`

Runs the eslinter with autofixing

### `npm run build:{env-name}`

Runs the react app build with specific file `env.[staging-state]`

----------

## Route list
- **/** => `Modules/Home/index.tsx` (Current Forecast)
- **/:lat/:lon** => `Modules/Home/index.tsx` (Current Forecast)
- **/:lat/:lon/:date** => `Modules/Home/index.tsx` (Current Forecast)
- **//forecasts/:lat/:lon** => `Modules/ForecastList/index.tsx` (5 days forecasts)
