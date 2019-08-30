const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const THME_ENV = require('./env.config.js');

// Path constants
const SRC = THME_ENV.paths.src;

// Common webpack config 
const config = {
	entry: {
		app: path.resolve(SRC, 'index.js')
	},

	output: {
		filename: 'wprr-[name].js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		
		new HtmlWebpackPlugin({
			template: path.resolve(SRC, 'index.html'),
			hot: true
		}),
		
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],

	resolve: {
		alias: {
			components: path.resolve(SRC, 'components'),
			views: path.resolve(SRC, 'views')
		}
	}
};

module.exports = config;