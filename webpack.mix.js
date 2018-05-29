// Webpack configuration for develepment with Hot Module Replacement
process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: ['babel-polyfill', './client/index'],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'components'),
        ],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port: 3001,
    hot: true,
    overlay: true,
    stats: 'errors-only',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
};

module.exports = config;
