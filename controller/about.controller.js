const About = require('../model/about.model'); // Adjust the path according to your project structure

// Create a new "About" entry
exports.createAbout = async (req, res) => {
    try {
        // Ensure the image was uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Image upload is required.',
            });
        }

        // Get the about data and image filename
        const { about } = req.body;

        // Since about might be a JSON string, you can parse it if needed
        const aboutString = JSON.stringify(about);
        const image = req.file.filename; // Get the filename from the uploaded file

        console.log("Image filename:", image); // For debugging purposes

        // Create a new About instance
        const newAbout = new About({ about: aboutString, image: image });
        await newAbout.save();

        return res.status(201).json({
            success: true,
            data: newAbout,
            message: 'About entry created successfully!',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error while creating About entry.',
            error: error.message,
        });
    }
};

// Get all "About" entries
exports.getAllAbout = async (req, res) => {
    try {
        const aboutEntries = await About.find();

        return res.status(200).json({
            success: true,
            data: aboutEntries,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error while fetching About entries.',
            error: error.message,
        });
    }
};

// Update an "About" entry by ID
exports.updateAbout = async (req, res) => {
    try {
        const { id } = req.params;

        const updateData = {};
        if (req.body.about) updateData.about = req.body.about;
        if (req.file) updateData.image = req.file.filename;

        const updatedAbout = await About.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedAbout) {
            return res.status(404).json({
                success: false,
                message: 'About entry not found.',
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedAbout,
            message: 'About entry updated successfully!',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error while updating About entry.',
            error: error.message,
        });
    }
};
