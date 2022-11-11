const User = require('../model/user-model')
const mongoose  = require('mongoose')

const loginUser = async(req,res)=>{
    const {mail,password} = req.body
   let user = await User.findOne({mail : mail})
   if(user && user.password == password){
        return res.send({"message " : `log in sucessfull ${user.name},${user.mail}`})
   }
   else {
         res.status(404)
         return res.send({"message " : "invalid credentials"})
   }

}

exports.loginUser = loginUser