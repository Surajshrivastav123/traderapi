const express = require('express');
const router = express.Router();
const queryController = require('../controller/query.controller');
const { protect } = require('../middleware/authMiddleware');

// Create a new query
router.post('/queries', queryController.createQuery);

// Get all queries
router.get('/queries', queryController.getAllQueries);


module.exports = router;
