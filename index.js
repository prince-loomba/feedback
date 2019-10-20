const express=require('express');
const app=express();
const port=3000;
const morgan=require('morgan');
const mongoose=require('mongoose');
app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/messages',{useNewUrlParser:true});
const messages=require('./routes/messages');
app.use('/messages',messages);
app.listen(port,function(){
	console.log(`Server running on ${port}`);
});