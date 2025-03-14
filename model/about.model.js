const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const about = mongoose.model('about', aboutSchema);

module.exports = about;
