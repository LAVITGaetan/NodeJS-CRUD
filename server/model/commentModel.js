const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true,
    },
    status: String
})

const Commentdb = mongoose.model('commentdb', schema);

module.exports = Commentdb;