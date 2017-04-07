var express = require('express');
var path =require('path');
var app = express();

var PORT = 8000

//need this section?
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"./client")))
app.use(express.static(path.join(__dirname,"./node_modules")))

app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "/client/views"))
app.set("view engine", "ejs")

app.get('/', function(req,res){
  res.render("main");
});
app.post('/result', function(req, res){
  console.log(req.body);
  res.render('result', {info: req.body});

})

app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
})
