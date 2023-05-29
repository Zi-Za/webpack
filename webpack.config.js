'use strict';

// const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = (env) => {
  return ({
  mode: "development",
  entry: "./home",
  output: {
    filename: "build.js",
    library: "home"
  },

  watch: env.NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: env.NODE_ENV == 'development' ? "inline-source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    })
  ]
})};