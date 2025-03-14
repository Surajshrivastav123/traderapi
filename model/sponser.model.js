const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        enum: ['section 1', 'section 2'], // Ensures that only these two values are allowed
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }    
});

module.exports = mongoose.model("Sponsor", sponsorSchema);
