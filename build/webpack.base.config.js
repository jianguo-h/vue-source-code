const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    filename: 'static/js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 3,
              name: 'static/fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 3,
              name: 'static/img/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      core: path.resolve(__dirname, '../vue-dev/src/core'),
      compiler: path.resolve(__dirname, '../vue-dev/src/compiler'),
      shared: path.resolve(__dirname, '../vue-dev/src/shared'),
      web: path.resolve(__dirname, '../vue-dev/src/platforms/web'),
      weex: path.resolve(__dirname, '../vue-dev/src/platforms/weex'),
      server: path.resolve(__dirname, '../vue-dev/src/server'),
      entries: path.resolve(__dirname, '../vue-dev/src/entries'),
      sfc: path.resolve(__dirname, '../vue-dev/src/sfc'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
}