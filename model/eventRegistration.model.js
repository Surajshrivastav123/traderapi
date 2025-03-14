const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    twitterId: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    emergencyContact: {
        type: String,
    },
    state: {
        type: String,
        required: true,
    },
    tradingYear: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    marketTraded: {
        type: [String],
        required: true,
    },
    profile: {
        type: [String],
        required: true,
    },
    howToKnow: {
        type: [String],
        required: true,
    },
    foodPreference: {
        type: [String],
        required: true,
    },
    beveragePreference: {
        type: [String],
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('registrationSchema', registrationSchema);
