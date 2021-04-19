'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

module.exports = merge(baseWebpackConfig, {
  entry: path.resolve(__dirname, '../website/main.ts'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  devServer: {
    port: '3100'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './website/index.html',
      filename: './index.html'
    })
  ]
})
