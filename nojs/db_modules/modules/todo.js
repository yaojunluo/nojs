var mongoose=require('../link');


var TodoSchema=mongoose.Schema({
    openId: String,
    planName: String,
    startTime: { type: Date, default: Date.now },
    endTime: Date,
    planState: { type: Boolean, default: false }
})


module.exports=mongoose.model('Todo', TodoSchema, 'todo');