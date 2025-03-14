const express = require('express');
const router = express.Router();
const venueController = require('../controller/eventVenue.controller'); // Adjust the path as necessary
const upload = require('../middleware/multerMiddleware');
const { protect } = require('../middleware/authMiddleware');


// Create a new venue
router.post('/eventVenue', upload.single('img'),venueController.createVenue);

// Get all venues
router.get('/eventVenue', venueController.getAllVenues);

// Update a venue
router.put('/eventVenue/:id',upload.single('image'), venueController.updateVenue);

// Delete a venue
router.delete('/eventVenue/:id',venueController.deleteVenue);

module.exports = router;
