const path = require("path");
const common = require("./webpack.common");
const  {merge}  = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
  ],
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
          "style-loader",  //3. inject style in to DOM
           "css-loader",   //2. Turn css into commonjs
           "sass-loader"   //1. Turn sass into css
          ],
      }
    ]
  }
})