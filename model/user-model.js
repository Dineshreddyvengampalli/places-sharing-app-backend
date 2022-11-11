const mongoose  = require('mongoose')

let user = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    mail :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    places : {
        type : String,
        required : true
    }
})

module .exports = mongoose.model('User',user)