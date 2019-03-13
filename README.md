# React-Redux-Starter-Kit

- Includes --
  - Redux Setup
  - Sass Setup
  - React Router Dom Setup
  - Template for .env files
  - Basic css styling setup
  - Flow Type Checking(for props and state checking)
  - Pre commit git hooks for prettier and eslint

## Scripts

| Script          | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm install`   | Installs all dependencies                       |
| `npm start`     | Starts project in `development` environment     |
| `npm run build` | Builds the project for `production` environment |
| `npm run test`  | Runs the testcases                              |

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder structure

```
.
├── public                   # Static public assets (not imported anywhere in source code)
│   ├── index.html           # Main HTML page container
|   ├── favicon.ico          # favicon file
|   ├── manifest.json        # Provides information about an application (such as name, author, icon, and description)
├── src                      # Application source code
│   ├── index.js             # Application bootstrap and rendering
│   ├── index.css            # Basic css for the project
│   ├── app                  # Main route definitions and split points
│   │   ├──               # Components that dictate major functionalities
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   ├── rootReducers.js  # Reducer registry and injection
```

#### .envtemplate

Edit this template according to your project requirement, so that whoever clone your git repo will know what .env variables they need.
Secret api key, token no. should be save in .env file and that file should not be push to remote git repo for security.
( setup is also done for not pushing .env file ).
example -

- For creating .env variables -- `REACT_APP_(your-specified-name)`
- For using -- `process.env.REACT_REACT_APP_(your-specified-name)`
