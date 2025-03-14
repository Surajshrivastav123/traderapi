const Sponsor = require('../model/sponser.model');

// Create a new sponsor
exports.createSponsor = async (req, res) => {
    try {
        console.log("req.body",req.body)
        const sponsor = new Sponsor({
            title: req.body.title,
            link: req.body.link,
            image: req.file ? req.file.path : '',
            isActive: req.body.isActive, // Convert string to boolean
            category: req.body.category
        });

        const savedSponsor = await sponsor.save();
        res.status(201).json(savedSponsor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all sponsors
exports.getAllSponsors = async (req, res) => {
    try {
        const sponsors = await Sponsor.find();
        res.status(200).json(sponsors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a sponsor by ID
exports.getSponsorById = async (req, res) => {
    try {
        const sponsor = await Sponsor.findById(req.params.id);
        if (!sponsor) {
            return res.status(404).json({ message: 'Sponsor not found' });
        }
        res.status(200).json(sponsor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a sponsor by ID
exports.updateSponsor = async (req, res) => {
    try {
        const updatedSponsor = await Sponsor.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            link: req.body.link,
            image: req.file ? req.file.path : req.body.image,
            isActive: req.body.isActive === 'true',
            category: req.body.category
        }, { new: true });

        if (!updatedSponsor) {
            return res.status(404).json({ message: 'Sponsor not found' });
        }

        res.status(200).json(updatedSponsor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a sponsor by ID
exports.deleteSponsor = async (req, res) => {
    try {
        const sponsor = await Sponsor.findByIdAndDelete(req.params.id);
        if (!sponsor) {
            return res.status(404).json({ message: 'Sponsor not found' });
        }
        res.status(200).json({ message: 'Sponsor deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
