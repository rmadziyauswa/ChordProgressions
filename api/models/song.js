var mongoose = require("mongoose");

var songSchema = new mongoose.Schema({
    name: String,
    key: String,
    progression: [[Number]],
    dateModified:{type: Date},
    isDeleted:{type:Boolean,default:false}

});

module.exports = mongoose.model('Song',songSchema);