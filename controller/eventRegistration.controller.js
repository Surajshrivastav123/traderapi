const Event = require('../model/eventList.model');

// Controller for creating an event
exports.createRegistration = async (req, res) => {
  try {
    const { title, content, startDate, endDate, isActive } = req.body;
    const newEvent = new Event({
      title,
      content,
      sponsorBanner: req.file.filename, // File stored by multer
      startDate,
      endDate,
      isActive
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting all events
exports.getAllRegister = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


