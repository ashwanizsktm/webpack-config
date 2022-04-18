const path = require("path");
const common = require("./webpack.common");
const  merge  = require("webpack-merge");

// const ENV = (process.env.ENV = process.env.NODE_ENV = 'development');

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

 
});