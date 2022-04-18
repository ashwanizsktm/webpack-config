var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: {
    main:"./src/index.js",
    vendor:"./src/vendor.js"
  },
   
  
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/template.html"
  }),

  // new webpack.DefinePlugin({
  //   "process.env": {
  //     // This has effect on the react lib size
  //     NODE_ENV: JSON.stringify("development"),
  //   }
  // }),
  
],

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
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
}