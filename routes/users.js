var express = require('express');
var router = express.Router();
const userController = require('../controller/user-controller')

/* GET users listing. */
router.post('/',(req,res)=>{
  userController.createUser(req,res)
})
router.get('/',(req,res)=>{
  userController.getUser(req,res)
})
module.exports = router;
