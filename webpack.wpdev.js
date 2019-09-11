const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Theme constants
const THEME_ENV = require('./env.config.js');

// Path constants
const SRC = THEME_ENV.paths.src;

const config = {
	mode: 'development',
	
	devtool: 'inline-source-map',
	
	watch: true,
	
};

module.exports = merge(common, config);