// routes/galleryRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerMiddleware');
const galleryController = require('../controller/gallery.controller');
const { protect } = require('../middleware/authMiddleware');

// Create a new gallery item
router.post('/gallery/create', upload.single('image'), galleryController.createGallery);

// Read all gallery items
router.get('/gallery/', galleryController.getAllGalleries);

// Read a single gallery item by ID

// Update a gallery item
router.put('/gallery/:id', upload.single('image'), galleryController.updateGallery);
// Delete a gallery item
router.delete('/gallery/:id', galleryController.deleteGallery);

module.exports = router;
