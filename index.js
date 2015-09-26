'use strict';
var express        = require('express');
var app            = express();

app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users

app.listen(8000, '127.0.0.1');   
