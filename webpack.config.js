/* eslint-disable */
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.join(__dirname, '/src/index'),
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, '/src/static'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8080,
    host: '0.0.0.0',
  },
  output: {
    publicPath: '/', // デフォルトルートにしないとHMRは有効にならない
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/static/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // autoprefixerプラグイン利用、cssのベンダープレフィックスを自動的につける
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [precss, autoprefixer({ browsers: ['last 2 versions'] })],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, '/src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions', '> 1%'],
                  },
                  modules: false,
                  useBuiltIns: true,
                },
              ],
              'stage-0',
              'react',
            ],
            plugins: [
              'babel-plugin-transform-decorators-legacy',
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader:
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
};
