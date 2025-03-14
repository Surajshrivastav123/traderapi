const mongoose = require('mongoose');

// Schema for the offerings
const offeringSchema = new mongoose.Schema({
  description: String,
});

// Price schema where eventMasterItem will reference the Event schema
const priceSchema = new mongoose.Schema({
  eventMasterItem: {
    type: mongoose.Schema.Types.ObjectId, // Reference to Event
    ref: 'Event', // Referencing Event model
    required: true,
  },
  titleTop: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  offerings: [offeringSchema], // Array of offerings
  price: {
    type: Number,
    required: true,
  },
  paymentLink: {
    type: String,
  },
  slots: {
    type: String,
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

module.exports = mongoose.model('priceSchema', priceSchema);
