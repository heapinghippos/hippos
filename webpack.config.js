'use strict'

var path = require('path');
var webpack = require('webpack');

var config = {
	entry: './index.jsx',
	output: { path: __dirname + '/public', filename: 'bundle.js' },
	module: {
		loaders: [
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
}

module.exports = config;