const express = require('express')
const router = express.Router()
const placeController  = require('../controller/place-controller')

router.get('/:id',(req,res)=>{
    placeController.getPlaceById(req,res)
})
router.get('/',(req,res)=>{
    placeController.getAllPlaces(req,res)
})
router.post('/',(req,res)=>{

    placeController.postPlace(req,res)
})

module.exports = router