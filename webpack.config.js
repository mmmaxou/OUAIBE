/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-mutating-methods */
const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const libraryName = pkg.name

const env = 'development' || 'production'

const config = {
  entry: [
    path.resolve(__dirname, './src/index.js'),
    path.resolve(__dirname, './styles/main.scss')
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'docs/'),
    filename: 'bundle.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{},
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        loader: 'file-loader'
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1'
        })
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }))
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.jsx', '.js']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './bundle.css',
      allChunks: true
    })
  ],
  stats: {
    colors: true
  },
  devServer: {
    port: 4000,
    open: true,
    historyApiFallback: true
  }
}
if (env === 'production') {
  config.plugins.push(new UglifyJSPlugin())
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  config.plugins.push(new OptimizeCSSAssets())
}

module.exports = config
