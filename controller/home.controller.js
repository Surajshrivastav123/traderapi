const Home = require('../model/home.model');


// Create a new agenda
exports.createHome = async (req, res) => {
  try {
    // Stringify the agenda data before saving
    const HomeString = JSON.stringify(req.body.home);
    
    const newHome = new Home({ home: HomeString });
    await newHome.save();

    res.status(201).json({ message: 'Home created successfully', home: newHome });
  } catch (error) {
    res.status(500).json({ message: 'Error creating agenda', error });
  }
};

// Get all agendas
exports.getAllhome = async (req, res) => {
  try {
    const home = await Home.find();
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching home', error });
  }
};


// Update an agenda
exports.updatehome = async (req, res) => {
    try {
        // Access the agenda directly from req.body
        const updatedhome = await Home.findByIdAndUpdate(
            req.params.id,
            { home: req.body.home }, // Directly use req.body.agenda
            { new: true, runValidators: true }
        );

        if  (!updatedhome) {
            return res.status(404).json({ message: 'Home not found' });
        }

        res.status(200).json({ message: 'Home updated successfully', agenda: updatedhome });
    } catch (error) {
        res.status(500).json({ message: 'Error updating home', error });
    }
};

