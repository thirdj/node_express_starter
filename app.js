var express = require('express');
var app = express();

app.set('view engine', 'html');
app.set('views', './views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
  res.render('index');
});
app.get('/kwon', function(req, res){
  res.render('kwon');
});
app.get('/send', function(req, res){
  res.send('res.send test');
});

app.listen(3030, function(req, res){
  console.log('localhost 3030');
});
