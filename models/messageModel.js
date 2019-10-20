const mongoose=require('mongoose');
const messageSchema=mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,
        message: {type:String,required:true},
        type: {type:String,required:true},
        nick: {type:String,required:true},

});

module.exports=mongoose.model('Message',messageSchema);