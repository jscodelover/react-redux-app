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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder structure

```
.
├── public                    # Static public assets (not imported anywhere in source code)
│   ├── index.html            # Main HTML page container
|   ├── favicon.ico           # favicon file
|   ├── manifest.json         # Provides information about an application (such as name, author, icon, and description)
├── src                       # Application source code
│   ├── index.js              # Application bootstrap and rendering
│   ├── index.css             # Basic css for the project
│   ├── app                  
│   │   ├──home               # Directories with the same names as the routes in App.js
│   │   ├──App.js             # Main route definitions and split points
│   ├── store                 # Redux-specific pieces
│   │   ├── createStore.js    # Create and instrument redux store
│   │   ├── rootReducers.js   # Reducer registry and injection
```

### Directory Structure (which contain redux and component)

```
├── src                     
│   ├── app                  
│   │   ├──home                     
│   │   │   ├──duck                 # Duck directory which houses all your Redux Code
│   │   │   │   ├──action.js        # Contain all your action creators
│   │   │   │   ├──operations.js    # Define any logic surrounding our actions and side effects (including Async logic)
│   │   │   │   ├──reducers.js      # Deal with updating the state
│   │   │   │   ├──types.js         # Contains string literals for your action types
│   │   │   │   ├──index.js         # Re-export our operations, reducers and action types
│   │   │   ├──Home.css             # Main route definitions and split points
│   │   │   ├──HomeComponent.jsx    # Main route definitions and split points
│   │   │   ├──HomeContainer.js     # Main route definitions and split points
│   │   │   ├──index.js             # Re-export our directory
```

#### .envtemplate

Edit this template according to your project requirement, so that whoever clone your git repo will know what .env variables they need.
Secret api key, token no. should be save in .env file and that file should not be push to remote git repo for security.
( setup is also done for not pushing .env file ).
example -

- For creating .env variables -- `REACT_APP_(your-specified-name)`
- For using -- `process.env.REACT_REACT_APP_(your-specified-name)`

