var mongoose = require('../link');


var Follow = mongoose.Schema({
    follow: {
        type: Boolean,
        default: false
    },
    activeid: String,
    passiveid: String,
    creatime: { type: Date, default: Date.now },
})


module.exports = mongoose.model('follow', Follow, 'follow');