var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var morgan = require("morgan");
var path = require("path");


var app = express();

var staticPath = path.join(__dirname,"public");

app.use(express.static(staticPath));
 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(session({secret:"Park A Buick",resave:false,saveUninitialized:true}));


app.listen(3000,function(err){

    if(err)
    {
        console.log(err);
    }else{

        console.log("Server Listening On Port 3000");
    }
});