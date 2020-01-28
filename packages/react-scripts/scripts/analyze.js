'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const configFactory = require('../config/webpack.config');

const config = configFactory('production');

config.plugins.push(new BundleAnalyzerPlugin());

// actually running compilation and waiting for plugin to start explorer
webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});
