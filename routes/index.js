var express = require("express");
var mongoose = require("mongoose");
var config = require("../config");

var Song = require("../api/models/song");

var router = express.Router();

mongoose.connect(config.DB,function(err){
    if(err)
    {
        console.log("Config DB", config.DB);
        console.log("MongoDB Connection error",err);
    }else{
        console.log("MongoDB Connection Successfull");
    }
});


router.get("/songs",function(req,res){

    Song.find(function(err,songs){
        if(err)
        {
            console.log("Could Not Find Songs",err);
        }else{
            res.json(songs);

        }
    });

});



router.get("/song/:id",function(req,res){

    var id = req.params.id;

    Song.findById(id,function(err,song){
        if(err)
        {
            console.log("Could Not Find Songs By ID",err);
        }else{
            res.json(song);

        }
    });

});



router.delete("/song/:id",function(req,res){

    var id = req.params.id;

    Song.findByIdAndRemove(id,function(err,song){
        if(err)
        {
            console.log("Could Not Delete Songs By ID",err);
        }else{
            res.json(song);

        }
    });

});


//add new song
router.post("/song",function(req,res){

    var song = new Song();

    song.name = req.body.name;
    song.key = req.body.key;    
    song.progression = req.body.progression;

    song.save(function(err){
        if(err)
        {
            console.log("Could Not Add New Song",err);
        }else{
            res.json(song);

        }
    });
});

   //edit song 
router.post("/song/:id",function(req,res){

    var id = req.params.id;

    
    Song.findById(id,function(err,song){
        if(err)
        {
            console.log("Could Not Find Song To Edit By ID",err);
        }else{
            
                    
            song.name = req.body.name;
            song.key = req.body.key;
            song.progression = req.body.progression;
                    
            song.save(function(err){
                if(err)
                {
                    console.log("Could Not Edit Found Song",err);
                }else{
                    res.json(song);

                }
            });

            

        }
    });



});


module.exports = router;
