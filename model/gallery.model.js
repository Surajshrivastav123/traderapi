const mongoose = require('mongoose');
const { Schema } = mongoose;

const gallerySchema = new Schema({
    image: {
        type: String, // This should be the path or URL of the image file
        required: true
    },
    category: {
        type: String,
        enum: ['section 1', 'section 2', 'section 3'], // Define allowed categories
        required: true
    },
    isActive: {
        type:Boolean,
        required:true
    },
    publishedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
