/* eslint-disable */
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, webpackConfig, {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].[hash:8].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
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
      template: 'src/static/index.html',
    }),
    new CopyWebpackPlugin([{ from: 'src/static', ignore: 'index.html' }]),
  ],
  devtool: false,
});
