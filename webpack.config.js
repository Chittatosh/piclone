const path = require('path');

const config = {
  mode: 'production',
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
};

module.exports = config;
