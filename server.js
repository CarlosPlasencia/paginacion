"use strict";
const express = require('express'),
	server = express(),
	swig = require('swig');
	//bodyParser = require('body-parser'),
	//cookieParser = require('cookie-parser');

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');

server.use(express.static('./public'))

require('./apps/user/controllers')(server);

const port = process.env.PORT || 8000
server.listen(port, function (){
	console.log("Server running at " + port);
});