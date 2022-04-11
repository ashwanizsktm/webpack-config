const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",

  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",  //3. inject style in to DOM
           "css-loader",   //2. Turn css into commonjs
           "sass-loader"   //1. Turn sass into css
          ],
      },
    ]
  }
}