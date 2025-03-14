const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Corrected spelling
    },
    img: {
        type: String,
        required: false // Corrected spelling
    },
    email: {
        type: String,
    },
    youTubeLink: {
        type: String,
    },
    instagramLink: {
        type: String,
    },
    TwitterLink: {
        type: String,
    },
    LinkedinLink: {
        type: String,
    },
    BioGraphy: {
        type: JSON,
    },
    phone: {
        type: String,
    },
    registeredAt: {
        type: String,
    },
    type: {
        type: String,
        required: true,
        enum:["speaker", "mentor"]
    },
    isActive: {
        type: Boolean,
        required: true // Corrected spelling
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Speaker', speakerSchema);
