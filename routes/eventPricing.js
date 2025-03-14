const express = require('express');
const router = express.Router();
const eventPricingController = require('../controller/eventPricing.controller');
const { protect } = require('../middleware/authMiddleware');

// Routes for event CRUD
router.post('/eventPricing/create', eventPricingController.createPrice);
router.get('/eventPricing/', eventPricingController.getAllPrices);
router.get('/eventPricing/:id', eventPricingController.getPriceById);
router.put('/eventPricing/:id',  eventPricingController.updatePrice);
router.delete('/eventPricing/:id',  eventPricingController.deletePrice);

module.exports = router;
