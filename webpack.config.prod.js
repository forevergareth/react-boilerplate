const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/assets/js')
  },
  module: {
    rules:  [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },{
      test: /\.((sa|sc|c)ss)$/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader'
        }
      ]}]   
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/app.css'
    }),
    // soure map issue
    //new UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ],
  devtool: 'source-map'
}