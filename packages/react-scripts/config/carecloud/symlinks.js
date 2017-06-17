'use strict';
/**
 * We want to symlink the bin files that we need to use for 
 * developing and building our applications
 */
const path = require('path');
const process = require('process');
const paths = require('../paths');
const spawn = require('react-dev-utils/crossSpawn');

const npmPackages = {
  'cross-env': '../cross-env/dist/bin/cross-env.js',
  'cross-env-shell': '../cross-env/dist/bin/cross-env-shell.js',
  eslint: '../eslint/bin/eslint.js',
  flow: '../flow-bin/cli.js',
  jest: '../jest/bin/jest.js',
  'node-sass-chokidar': '../node-sass-chokidar/bin/node-sass-chokidar',
  'npm-run-all': '../npm-run-all/bin/npm-run-all/index.js',
  'run-p': '../npm-run-all/bin/run-p/index.js',
  'run-s': '../npm-run-all/bin/run-s/index.js',
};

const createAppSymlinks = () => {
  console.log('Creating Symlinks');
  process.chdir(path.resolve(paths.appNodeModules, '.bin'));
  Object.keys(npmPackages).map(name => {
    const args = ['-s', npmPackages[name], name];
    const proc = spawn.sync('ln', args);
    if (proc.status !== 0) {
      console.error(`\`Symlink of  ${npmPackages[name]} -> ${name}\` failed`);
      return;
    }
  });
};

module.exports = createAppSymlinks;
