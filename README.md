# React-Redux-Starter-Kit

- Includes --
  - Redux Setup
  - Css Module Setup
  - Sass Setup
  - Template for .env files
  - Basic css styling setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

#### .envtemplate

Edit this template according to your project requirement, so that whoever clone your git repo will know what .env variables they need.
Secret api key, token no. should be save in .env file and that file should not be push to remote git repo for security.
( setup is also done for not pushing .env file ).
example -

- For creating .env variables -- `REACT_APP_(your-specified-name)`
- For using -- `process.env.REACT_REACT_APP_(your-specified-name)`
