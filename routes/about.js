const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerMiddleware');
const aboutController=require("../controller/about.controller")
// Create a new speaker with image upload
router.post('/about',upload.single('image'), aboutController.createAbout);

router.get('/about', aboutController.getAllAbout);
// Update a speaker by ID with optional image upload
router.put('/about/:id', upload.single('image'), aboutController.updateAbout);

module.exports = router;
