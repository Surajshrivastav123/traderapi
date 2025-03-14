const Price = require('../model/eventPricing.model');

// Create Price
exports.createPrice = async (req, res) => {
    try {
        const { eventMasterItem, titleTop, title, offerings, price,slots,paymentLink, isActive } = req.body;
        const newPrice = new Price({
            eventMasterItem,
            titleTop,
            title,
            offerings,
            price,
            slots,
            paymentLink,
            isActive,
        });
        const savedPrice = await newPrice.save();
        res.status(201).json(savedPrice);
    } catch (error) {
        res.status(500).json({ message: 'Error creating price', error });
    }
};

// Read all Prices
exports.getAllPrices = async (req, res) => {
    try {
        const prices = await Price.find().populate('eventMasterItem'); // Populate the event details
        res.status(200).json(prices);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching prices', error });
    }
};

// Read a single Price by ID
exports.getPriceById = async (req, res) => {
    try {
        const price = await Price.findById(req.params.id).populate('eventMasterItem');
        if (!price) return res.status(404).json({ message: 'Price not found' });
        res.status(200).json(price);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching price', error });
    }
};

// Update Price
exports.updatePrice = async (req, res) => {
    try {
        const updatedPrice = await Price.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('eventMasterItem');
        if (!updatedPrice) return res.status(404).json({ message: 'Price not found' });
        res.status(200).json(updatedPrice);
    } catch (error) {
        res.status(500).json({ message: 'Error updating price', error });
    }
};

// Delete Price
exports.deletePrice = async (req, res) => {
    try {
        const deletedPrice = await Price.findByIdAndDelete(req.params.id);
        if (!deletedPrice) return res.status(404).json({ message: 'Price not found' });
        res.status(200).json({ message: 'Price deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting price', error });
    }
};
