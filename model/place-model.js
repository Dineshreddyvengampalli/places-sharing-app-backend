const mongoose = require('mongoose')

let place = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    creator : {
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true

    },
    location : {
        lat : {type : Number, required : true},
        lon : {type : Number, required : true}
    }
})

module.exports = mongoose.model('Place',place)