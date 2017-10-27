var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve('js'),
	entry: {
		app: './app.js',
		lib: './lib.js',
		examples: './examples.js',
	},
	output: {
		publicPath: '/public/assets/',
		filename: "[name].js"
	},
	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!less-loader"
			}
		]
	},
	resolve: {
		extensions: ['.', '.js', '.es6']
	}
}