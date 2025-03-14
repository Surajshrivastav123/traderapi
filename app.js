const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const connect = require('./config/db');
const queryRoutes = require('./routes/query');
const speakerRoutes = require('./routes/speaker');
const sponserRoutes=require('./routes/sponser')
const galleryRoutes=require('./routes/gallery')
const eventRoutes=require('./routes/event')
const eventPricingRoutes=require("./routes/eventPricing")
const eventVenue=require("./routes/eventVenue")
const userRoutes=require("./routes/userRoutes")
const registerRoutes=require("./routes/registration")
const agendaRoutes=require("./routes/agenda")
const homeRoutes=require("./routes/home")
const aboutRoutes=require("./routes/about")
const navRoutes=require("./routes/nav")



// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Call db connection function
connect();

// API Routes
app.use('/api/v1', queryRoutes);
app.use('/api/v1', speakerRoutes);
app.use('/api/v1', sponserRoutes);
app.use('/api/v1', galleryRoutes);
app.use('/api/v1', eventRoutes);
app.use('/api/v1', eventPricingRoutes);
app.use('/api/v1', eventVenue);
app.use('/api/v1', userRoutes);
app.use('/api/v1', registerRoutes);
app.use('/api/v1', agendaRoutes);
app.use('/api/v1', homeRoutes);
app.use('/api/v1', aboutRoutes);
app.use('/api/v1', navRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
