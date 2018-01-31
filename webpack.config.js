/* eslint-disable */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['react-hot-loader/patch', `${__dirname}/src/index.js`],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json'],
  },
  devServer: {
    contentBase: `${__dirname}/src/static`,
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
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
};
