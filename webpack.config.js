const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {loader:'babel-loader'}
        },
        {
            test: /\.css$/i,
            use: [
              // creates `style` nodes from JS strings
              'style-loader',            
            ],
          
        },
        {
            test: /\.css$/i,
            use: [
              //translate css -> CommonJS
              'css-loader',             
            ],
        },
        {
            test: /\.html$/,
            use: [{loader: "html-loader"}]
        }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist'
  }
};