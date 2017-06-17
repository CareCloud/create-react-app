'use strict';
/**
 * CareCloud React Scripts custom scripts.
 * We import all our custom scripts in this file for 
 * easy access and reference.
 * 
 */

const packageScripts = require('./package-scripts');
const createAppSymlinks = require('./symlinks');
const webpack = require('./webpack');

module.exports = {
  packageScripts,
  createAppSymlinks,
  webpack,
};
