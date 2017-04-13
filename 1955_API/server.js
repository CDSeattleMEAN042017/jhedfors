//import required modules
var express = require('express')
var mongoose = require('mongoose')

//setup APP
var app = express()


var PORT = 8000

require('./server/config/mongoose.js')
var routes_setter = require('./server/config/routes.js')
routes_setter(app)
//WEB SERVER
app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
})
