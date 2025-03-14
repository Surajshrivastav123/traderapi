const express = require('express');
const HomeController = require('../controller/home.controller'); // Import the entire module, not destructuring
const router = express.Router();

// Routes for home CRUD
router.post('/home/create', HomeController.createHome);
router.get('/home', HomeController.getAllhome); // Ensure method name matches the controller
router.put('/home/:id', HomeController.updatehome);

module.exports = router;
