const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    home:String
}, { timestamps: true });

const home = mongoose.model('home', homeSchema);

module.exports = home;
