const Agenda = require('../model/agenda.model');

// Create a new agenda
exports.createAgenda = async (req, res) => {
  try {
    // Stringify the agenda data before saving
    const agendaString = JSON.stringify(req.body.agenda);
    
    const newAgenda = new Agenda({ agenda: agendaString });
    await newAgenda.save();

    res.status(201).json({ message: 'Agenda created successfully', agenda: newAgenda });
  } catch (error) {
    res.status(500).json({ message: 'Error creating agenda', error });
  }
};

// Get all agendas
exports.getAllAgendas = async (req, res) => {
  try {
    const agendas = await Agenda.find();
    res.status(200).json(agendas);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching agendas', error });
  }
};


// Update an agenda
exports.updateAgenda = async (req, res) => {
    try {
        // Access the agenda directly from req.body
        const updatedAgenda = await Agenda.findByIdAndUpdate(
            req.params.id,
            { agenda: req.body.agenda }, // Directly use req.body.agenda
            { new: true, runValidators: true }
        );

        if (!updatedAgenda) {
            return res.status(404).json({ message: 'Agenda not found' });
        }

        res.status(200).json({ message: 'Agenda updated successfully', agenda: updatedAgenda });
    } catch (error) {
        res.status(500).json({ message: 'Error updating agenda', error });
    }
};

