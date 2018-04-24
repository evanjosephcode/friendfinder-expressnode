var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express(); 
var PORT = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/app/public')));

// routing
// require('./app/routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);


// port listener 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });