const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

const webpackDevConfig = webpackMerge(webpackBaseConfig, {
  devtool: '#cheap-module-eval-source-map',
  mode: 'development',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = webpackDevConfig;