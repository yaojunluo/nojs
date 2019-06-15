var mongoose = require('../link');


var Interactive = mongoose.Schema({
    interactive: String,
    genre: Number,
    activeid: String,
    passiveid: String,
    activename: String,
    passivename: String,
    creatime: { type: Date, default: Date.now },
})


module.exports = mongoose.model('interactive', Interactive, 'interactive');