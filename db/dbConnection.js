const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/PlaceShareApp',(err)=>{
    if(!err){
        console.log("connected to the dataBase")
    }
    else{
        console.log(err)
    }    
})