const path = require("path");
const dev = require('./webpack.dev');
const  merge  = require("webpack-merge");

module.exports = merge(dev, {
  mode: 'development',
  
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
});