const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const messageModel=require('../models/messageModel');
router.get('/personal',function(req,res){
    messageModel.find()
	.exec()
	.then(message=>{
		res.json(message).status(200);
    }).catch(err=>{res.send(err);});
});
router.post('/',function(req,res){
    console.log(req.body);
    const newMessage=new messageModel({
		_id: new mongoose.Types.ObjectId(),
		message: req.body.message,
        nick: req.body.nick,
        type: "personal"
    	});
		newMessage.save();
		res.send("Done").status(201);
});
module.exports=router;