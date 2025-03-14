const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    sponsorBanner: {
        type: String, // Stores the filename of the uploaded image
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
