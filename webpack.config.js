const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './client/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		// publicPath: '/build/',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin()],
	mode: process.env.NODE_ENV,
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		// host: 'localhost',
		// port: 8080,
		contentBase: path.join(__dirname, './client'),
		publicPath: '/build/',
		historyApiFallback: true,
		hot: true,
		proxy: {
			'/api': 'http://localhost:3000',
		},
	},
};
