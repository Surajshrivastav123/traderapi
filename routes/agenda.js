const express = require('express');
const router = express.Router();
const agendaController = require('../controller/agenda.controller');

// Routes for agenda CRUD
router.post('/agenda/create', agendaController.createAgenda);
router.get('/agenda', agendaController.getAllAgendas); // Ensure the method name matches the controller
router.put('/agenda/:id', agendaController.updateAgenda);

module.exports = router;
