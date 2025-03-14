const express = require('express');
const router = express.Router();
const SponsorController = require('../controller/sponser.controller');
const multer = require('multer');
const { protect } = require('../middleware/authMiddleware');

// Setup multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Store uploaded images in the 'uploads/' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Append timestamp to the file name
    }
});

const upload = multer({ storage: storage });

// Routes
router.post('/sponser/create', upload.single('image'), SponsorController.createSponsor);
router.get('/sponser/get', SponsorController.getAllSponsors);
router.get('/sponser/:id', SponsorController.getSponsorById);
router.put('/sponser/:id', upload.single('image'), SponsorController.updateSponsor);
router.delete('/sponser/:id', SponsorController.deleteSponsor);

module.exports = router;
