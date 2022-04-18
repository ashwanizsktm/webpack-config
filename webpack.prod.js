const path = require("path");
const common = require("./webpack.common");
const  merge  = require("webpack-merge");
// const ENV = (process.env.ENV = process.env.NODE_ENV = 'development');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[new CleanWebpackPlugin()]
})