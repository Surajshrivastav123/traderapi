const Event = require('../model/eventList.model');

// Controller for creating an event
exports.createEvent = async (req, res) => {
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
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting a single event
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for updating an event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const { title, content, startDate, endDate, isActive } = req.body;
    event.title = title || event.title;
    event.content = content || event.content;
    event.startDate = startDate || event.startDate;
    event.endDate = endDate || event.endDate;
    event.isActive = isActive || event.isActive;

    if (req.file) event.sponsorBanner = req.file.filename; // Update the image if provided

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for deleting an event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.deleteOne();
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
