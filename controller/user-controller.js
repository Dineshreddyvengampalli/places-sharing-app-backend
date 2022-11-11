const User = require('../model/user-model')
const mongoose  = require('mongoose')

const createUser = (req,res)=>{
    const {name,mail,password,places} = req.body
    let user = new User({
        name : name,
        mail : mail,
        password : password,
        places : places
    })
    return user.save((err)=>{
        if(!err){
            return res.send({"created user " : user.name})
        }
    })
}

const getUser = (req,res)=>{
    return User.find((err,data)=>{
        if(!err){
            return res.send({"users : ": data})
        }
    })

}

exports.createUser = createUser
exports.getUser = getUser