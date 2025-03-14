const express = require('express');
const router = express.Router();
const eventController = require('../controller/event.controller');
const upload = require('../middleware/multerMiddleware');
const { protect } = require('../middleware/authMiddleware');

// Routes for event CRUD
router.post('/event/create',upload.single('image'), eventController.createEvent);
router.get('/event/', eventController.getAllEvents);
router.get('/event/:id', eventController.getEventById);
router.put('/event/:id', eventController.updateEvent);
router.delete('/event/:id', eventController.deleteEvent);

module.exports = router;
