const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './client/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
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
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        // host: 'localhost',
        // port: 8080,
        // contentBase: path.join(__dirname, 'build/'),
        // hot: true,
        publicPath: '/build/',
        // historyApiFallback: true,
        proxy: {
			'/api': 'http://localhost:3000'
		}
    },



}