// initial setup
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var routes = require('./controllers/routes.js')


var app = express();
mongoose.connect('mongodb://localhost/portfolio');
 //connection to db(db name is portfolio, colletion is users)



// Application Configuration, not really sure what these do
app.use(logger('dev')); //no idea what this does
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));  


//--------------- Routes ---------------  
//initial setup route
app.get('/', function(req, res) {
    res.sendFile('html/shell.html', {root : './public'});
});

app.get('/craps', function(req,res) {
    res.sendFile('html/craps.html', {root : './public'});
})

app.post('/api/sendEmail', routes.sendEmail)

// Creating Server and Listening for Connections 
var port = 3173
app.listen(port, function(){
  console.log('Server running on port ' + port);

}) 