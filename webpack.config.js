/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name]-[hash].bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json'],
  },
  devServer: {
    contentBase: 'dist/',
    historyApiFallback: true,
    open: true,
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
  ],
};
