const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vueSrcPath = path.resolve(__dirname, '../vue-dev/src');
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
      core: path.resolve(vueSrcPath, 'core'),
      compiler: path.resolve(vueSrcPath, 'compiler'),
      shared: path.resolve(vueSrcPath, 'shared'),
      web: path.resolve(vueSrcPath, 'platforms/web'),
      weex: path.resolve(vueSrcPath, 'platforms/weex'),
      server: path.resolve(vueSrcPath, 'server'),
      entries: path.resolve(vueSrcPath, 'entries'),
      sfc: path.resolve(vueSrcPath, 'sfc'),
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