const Navigation = require('../model/nav.model');

// Create a new navigation item
exports.createNavItem = async (req, res) => {
  const { label, path, isActive } = req.body;
  
  try {
    const navItem = new Navigation({ label, path, isActive });
    const newNavItem = await navItem.save();
    res.status(201).json(newNavItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all navigation items
exports.getNavItems = async (req, res) => {
  try {
    const navItems = await Navigation.find();
    res.json(navItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single navigation item by ID
exports.getNavItemById = async (req, res) => {
  try {
    const navItem = await Navigation.findById(req.params.id);
    if (!navItem) return res.status(404).json({ message: 'Navigation item not found' });
    res.json(navItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a navigation item
exports.updateNavItem = async (req, res) => {
  const { label, path, isActive } = req.body;

  try {
    const navItem = await Navigation.findById(req.params.id);
    if (!navItem) return res.status(404).json({ message: 'Navigation item not found' });

    if (label) navItem.label = label;
    if (path) navItem.path = path;
    if (isActive !== undefined) navItem.isActive = isActive;

    const updatedNavItem = await navItem.save();
    res.json(updatedNavItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a navigation item
exports.deleteNavItem = async (req, res) => {
  try {
    const navItem = await Navigation.findByIdAndDelete(req.params.id);
    if (!navItem) return res.status(404).json({ message: 'Navigation item not found' });
    res.json({ message: 'Navigation item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
