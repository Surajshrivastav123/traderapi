const express = require('express');
const router = express.Router();
const speakerController = require('../controller/speaker.controller');
const upload = require('../middleware/multerMiddleware');
const { protect } = require('../middleware/authMiddleware');

// Create a new speaker with image upload
router.post('/speakers',upload.single('image'), speakerController.createSpeaker);

router.get('/speakers', speakerController.getAllSpeakers);

// Get a single speaker by ID
router.get('/speakers/:id', speakerController.getSpeakerById);

// Update a speaker by ID with optional image upload
router.put('/speakers/:id', upload.single('image'), speakerController.updateSpeaker);

// Delete a speaker by ID
router.delete('/speakers/:id', speakerController.deleteSpeaker);

module.exports = router;
