var mongoose = require('../link');


var Comment = mongoose.Schema({
    author: String,
    avatar: String,
    tweet: String, 
    content: String,
    openId: String,
    datetime: { type: Date, default: Date.now },
})


module.exports = mongoose.model('comment', Comment, 'comment');