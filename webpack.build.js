/* eslint-disable */
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = Object.assign({}, webpackConfig);

delete config.devtool;

config.entry = {
  bundle: [`${__dirname}/src/index`],
};
config.output = {
  path: `${__dirname}/dist/`,
  filename: 'js-[hash:8]/[name].js',
  chunkFilename: 'js-[hash:8]/[name].js',
  publicPath: '/',
};

config.plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js-[hash:8]/vendor.js',
    minChunks: module => {
      return module.context && module.context.indexOf('node_modules') !== -1;
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    minimize: true,
    compress: {
      drop_debugger: true,
      drop_console: true,
      warnings: false,
    },
  }),
  new HtmlWebpackPlugin({
    template: `src/static/${entry.out}index.html`,
    filename: 'index.html',
  }),
];

config.devtool = 'source-map';
config.plugins.push(
  new CopyWebpackPlugin([{ from: 'src/static', ignore: 'index.html' }]),
);

module.exports = config;
