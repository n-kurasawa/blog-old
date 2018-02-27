/* eslint-disable */
module.exports = {
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/public',
    publicPath: '/',
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    port: 8080,
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
};
