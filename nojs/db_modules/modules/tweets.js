var mongoose = require('../link');


var Tweets = mongoose.Schema({
    title: String,
    openId: String,
    author: String, 
    text: String,
    coverImg: String,
    awesome: {
        type: Number,
        default: 0
    },
    collect: {
        type: Number,
        default: 0
    },
    comment: {
        type: Number,
        default: 0
    },
    read: {
        type: Number,
        default: 0
    },
    label: {
        type: [],
        default: ['前端']
    },
    nav: [],
    creatime: { type: Date, default: Date.now },
})


module.exports = mongoose.model('Tweets', Tweets, 'tweets');