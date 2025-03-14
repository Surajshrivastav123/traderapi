const mongoose = require('mongoose');
const { Schema } = mongoose;

const NavigationSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true // Adds `createdAt` and `updatedAt` fields
});

module.exports = mongoose.model('Navigation', NavigationSchema);
