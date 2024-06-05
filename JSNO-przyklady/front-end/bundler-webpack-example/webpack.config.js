const path = require( 'path' );
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true
	},
	module: {},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	}
};
