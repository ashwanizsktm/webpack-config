var webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: {
    main:"./src/index.js",
  },
   
  
  plugins: [
  //   new HtmlWebpackPlugin({
  //   template: "./src/template.html"
  // }),

  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  }),
  
],

  module: {
    rules: [
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