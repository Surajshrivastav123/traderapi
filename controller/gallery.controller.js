// controllers/galleryController.js
const Gallery = require('../model/gallery.model');

exports.createGallery = async (req, res) => {
    try {
        const { publishedAt, category, isActive } = req.body;
        const image = req.file.filename; // Get the uploaded file name

        const newGallery = new Gallery({
            image,
            publishedAt,
            category,
            isActive
        });

        await newGallery.save();
        res.status(201).json(newGallery);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllGalleries = async (req, res) => {
    try {
        const galleries = await Gallery.find();
        res.status(200).json(galleries);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getGalleryById = async (req, res) => {
    try {
        const gallery = await Gallery.findById(req.params.id);
        if (!gallery) return res.status(404).json({ message: 'Gallery not found' });
        res.status(200).json(gallery);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateGallery = async (req, res) => {
    try {
        const { publishedAt, category, isActive } = req.body;
        const updateData = { publishedAt, category, isActive };

        if (req.file) {
            updateData.image = req.file.filename; // Update the image file name
        }

        const gallery = await Gallery.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!gallery) return res.status(404).json({ message: 'Gallery not found' });
        res.status(200).json(gallery);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteGallery = async (req, res) => {
    try {
        const gallery = await Gallery.findByIdAndDelete(req.params.id);
        if (!gallery) return res.status(404).json({ message: 'Gallery not found' });
        res.status(200).json({ message: 'Gallery deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
