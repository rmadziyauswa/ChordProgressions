var mongoose = require("mongoose");

var songSchema = new mongoose.Schema({
    name: String,
    key: String,
    progression: [[Number]]

});

module.exports = mongoose.model('Song',songSchema);
