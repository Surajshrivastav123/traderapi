const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  eventMasterItem: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  map: {
    type: String,
    required: true,
  },
  img: {
    type: String,  // Changed from Date to String
  },
  date: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  offerings: [{
    startDate: Date,
    endDate: Date,
    price: Number
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Venue', EventSchema);