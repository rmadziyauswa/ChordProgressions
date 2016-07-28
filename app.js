var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var morgan = require("morgan");
var path = require("path");
var config = require('./config');
var router = require("./routes/index");

var app = express();

var staticPath = path.join(__dirname,"public");

app.use(express.static(staticPath));
 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(session({secret:"Park A Buick",resave:false,saveUninitialized:true}));


app.use(function(req,res,next){

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();

});




app.use("/api",router);


app.listen(config.PORT,function(err){

    if(err)
    {
        console.log(err);
    }else{

        console.log("Server Listening On Port " + config.PORT);
    }
});