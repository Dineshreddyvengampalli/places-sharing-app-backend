const express = require('express')
const router = express.Router()
const loginController = require('../controller/login-controller')

router.post('/',(req,res)=>{
    loginController.loginUser(req,res)
})
module.exports = router