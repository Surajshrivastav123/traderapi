const express = require('express');
const router = express.Router();
const queryController = require('../controller/query.controller');
const { protect } = require('../middleware/authMiddleware');

// Create a new query
router.post('/queries', queryController.createQuery);

// Get all queries
router.get('/queries', queryController.getAllQueries);

// Get a single query by ID
router.get('/queries/:id', queryController.getQueryById);

// Update a query by ID
router.put('/queries/:id',queryController.updateQuery);

// Delete a query by ID
router.delete('/queries/:id',queryController.deleteQuery);

module.exports = router;
