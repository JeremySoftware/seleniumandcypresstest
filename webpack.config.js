const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    //contentBase: path.join(__dirname, "public"),
    //publicPath: 'http://localhost:8080/',
    //port: 8080
    },
};