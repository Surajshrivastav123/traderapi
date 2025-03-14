const express = require('express');
const router = express.Router();
const navigationController = require('../controller/nav.controller');

// Create a new navigation item
router.post('/navigation', navigationController.createNavItem);

// Get all navigation items
router.get('/navigation', navigationController.getNavItems);

// Get a single navigation item by ID
router.get('/navigation/:id', navigationController.getNavItemById);

// Update a navigation item
router.put('/navigation/:id', navigationController.updateNavItem);

// Delete a navigation item
router.delete('/navigation/:id', navigationController.deleteNavItem);

module.exports = router;
