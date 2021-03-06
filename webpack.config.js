var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
      loaders: [
          {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_module/,
              query: {
                  presets: ['es2015', 'react']
              }
          }
      ]
  }
};