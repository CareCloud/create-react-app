# Custom Installed Dependencies
React Scripts will come with many packages already pre-installed but we wanted to also inlcude common packages we're going to use throughout the applicaitons we going to initialize with this script. 

Below should be a list of the lastest libraries we've added to this package. Once a user creates a new ReactJS application using our React Scripts package these libraries will be available to them in their `node_modules` folder, but not listed in their local `package.json`.

## Babel
```
npm install babel-polyfill babel-preset-stage-0 --save
```

## React
```
npm install react-router redux react-redux rxjs immutable redux-immutable redux-observable redux-thunk reselect recompose react-addons-css-transition-group react-addons-transition-group prop-types axios react-transition-group --save
```

## Webpack
```
npm install sass-loader style-loader css-loader postcss-loader dotenv-webpack --save
```

## Testing
```
npm install jest enzyme jest-enzyme react-test-renderer nock sinon moxios --save
```

## Utilities 
```
npm install npm-run-all cross-env node-sass-chokidar --save
```


# Custom Configurations

Here we document the custom code configurations we've applied to React Scripts.

# Files

`scripts/init.js`

Here we added a couple of more custom commands to start and build our application while compiling SASS files. 
```
  // Setup the script rules
  appPackage.scripts = {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "start:js": 'react-scripts start',
    "build:js": 'react-scripts build',
    test: 'react-scripts test --env=jsdom',
    eject: 'react-scripts eject',
  };
```

