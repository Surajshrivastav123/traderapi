const mongoose = require('mongoose');

const agendaSchema = new mongoose.Schema({
    agenda:String
}, { timestamps: true });

const agenda = mongoose.model('agenda', agendaSchema);

module.exports = agenda;
