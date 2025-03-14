const express = require('express');
const router = express.Router();
const registartionController=require("../controller/registration.controller")
// Create a new query
router.post('/register', registartionController.createRegistration);

// Get all queries
router.get('/register', registartionController.getAllRegistration);

module.exports = router;
