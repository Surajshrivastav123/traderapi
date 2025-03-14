const Venue = require('../model/Venue.model'); // Adjust the path as necessary

// Create a new venue
exports.createVenue = async (req, res) => {
    try {
        const { eventMasterItem, city, place, map, date, isactive, offerings } = req.body;
        const img = req.file.filename; // Get the uploaded file name
        
        const venueData = {
            eventMasterItem,
            city,
            place,
            img,
            map,
            date,
            isactive: isactive === 'true',
            offerings: offerings ? JSON.parse(offerings) : []
        };

        const venue = new Venue(venueData);
        const newVenue = await venue.save();
        res.status(201).json(newVenue);
    } catch (error) {
        console.error('Error creating venue:', error);
        res.status(400).json({ message: error.message });
    }
};


// Get all venues
exports.getAllVenues = async (req, res) => {
    try {
        const venues = await Venue.find().populate('eventMasterItem');
        res.json(venues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a venue

exports.updateVenue = async (req, res) => {
    console.log('Updating venue. Request body:', req.body);
    console.log('File:', req.file);

    const { eventMasterItem, city, place, map, date, isActive } = req.body;
    const img = req.file.filename; // Get the uploaded file name
    
    try {
        const venue = await Venue.findById(req.params.id);
        if (!venue) return res.status(404).json({ message: 'Venue not found' });

        console.log('Found venue:', venue);

        // Update fields if they are provided
        if (eventMasterItem) venue.eventMasterItem = eventMasterItem;
        if (city) venue.city = city;
        if (place) venue.place = place;
        if (map) venue.map = map;
        if (date) venue.date = date;
        if (isActive !== undefined) venue.isActive = isActive;

        // Explicit image handling
        if (img) {
            console.log('New image path:', img);
            venue.img = img;
        }

        console.log('Updated venue before save:', venue);

        const updatedVenue = await venue.save();
        console.log('Venue after save:', updatedVenue);

        res.json(updatedVenue);
    } catch (error) {
        console.error('Error updating venue:', error);
        res.status(400).json({ message: error.message });
    }
};

// Delete a venue
exports.deleteVenue = async (req, res) => {
    try {
        const venue = await Venue.findByIdAndDelete(req.params.id);
        if (!venue) return res.status(404).json({ message: 'Venue not found' });

        res.json({ message: 'Venue deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
