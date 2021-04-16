'use strict'
const path = require('path')
const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    adminUI: './packages/admin-ui/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../lib'), // 出口目录
    publicPath: '/lib/',
    library: 'adminUI', // 包名
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
})
