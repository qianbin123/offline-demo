const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};