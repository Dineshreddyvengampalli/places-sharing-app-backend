const Place = require('../model/place-model')
const mongoose  = require('mongoose')

const getAllPlaces = async(req,res)=>{
    let places = await Place.find()
    if(places){
        res.status(200)
        res.json({"places" : places})
        return
    }
}
const postPlace = (req,res)=>{
    const {title,creator,address,location} = req.body
    let place = new Place({
        title : title,
        creator : creator,
        address : address,
        location : location
    })
    return place.save((err)=>{
        if(!err){
            return res.json({"message" : "Data posted "})
        }
        else{
            return res.status(404)
        }
    })
}

const getPlaceById = (req,res)=>{
    let id = req.params.id
    Place.findOne({_id : id},(err,data)=>{
        if(!err){
            res.send({"place " : data})
        }
    })
}

exports.getAllPlaces = getAllPlaces
exports.postPlace = postPlace
exports.getPlaceById = getPlaceById