const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const router = express.Router();
const history = require('connect-history-api-fallback');


if(process.env.NODE_ENV != 'production'){

	console.log(process.env.NODE_ENV ? process.env.NODE_ENV : 'NODE_ENV variable doesn`t definded');

	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackConfig = require('./webpack.config.js');
	const compiler = webpack(webpackConfig)

	app.use(history());

	app.use(express.static('public/'));

	app.use(webpackDevMiddleware(compiler, {
	    publicPath: webpackConfig.output.publicPath,
	    stats: {
	    	colors: true,
	    	process: true
	    }
	}))

} else {

	console.log(process.env.NODE_ENV)

	app.use(express.static('public'));

	app.get('*', function(req, res) {
	  res.sendFile(path.resolve(__dirname, 'public/index.html'));
	});
}


app.listen(8000, () => console.log('listen 8000'));
