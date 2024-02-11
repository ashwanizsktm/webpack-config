const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				// minify: TerserPlugin.uglifyJsMinify,
				terserOptions: {
					// Include the following options to optimize your bundles:
					compress: {
						drop_console: true,        // Remove console.*() calls
						drop_debugger: true,       // Remove debugger statements
						inline: true,              // Inline functions if possible
						keep_fnames: false,        // Remove function names to reduce size
					},
					mangle: {
						keep_fnames: false,         // Remove function names during minification
					},
					output: {
						comments: false,            // Remove comments
					},
				}
				// see:- https://webpack.js.org/plugins/terser-webpack-plugin/
			}),
		],

		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},

	plugins: [
		new CleanWebpackPlugin(),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),

		new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			title: 'My App',
			filename: 'admin.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		}),
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,  //3. Extract css into files
					"css-loader",   //2. Turn css into commonjs
					"sass-loader"   //1. Turn sass into css
				],
			}
		]
	}
})