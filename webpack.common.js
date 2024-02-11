var webpack = require('webpack');
const path = require("path");
const glob = require('glob');
const PATHS = {
	src: path.join(__dirname, 'src')
}
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
  },


  plugins: [
    new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
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
      },
    ]
  }
}