/**
 * Created by fed on 2017/9/30.
 */
const path = require('path');

module.exports = {
  entry: './src/entry.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      }
    ]
  }
};
