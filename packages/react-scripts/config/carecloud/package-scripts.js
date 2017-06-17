'use strict';
/**
 *  These are the overrides for the package.json scripts values.
 */

module.exports = {
  start: 'react-scripts start',
  build: 'react-scripts build',
  test: 'react-scripts test --env=jsdom',
  eject: 'react-scripts eject',
  flow: 'flow',
  'build:sass': 'node-sass-chokidar src/ -o src/',
  'watch:sass': 'npm run build:sass && node-sass-chokidar src/ -o src/ --watch --recursive',
  'start:all': 'npm-run-all -p watch:sass start',
  'build:all': 'npm-run-all flow build:sass build',
  'test:all': 'react-scripts test --env=jsdom  --watchAll --coverage',
};
