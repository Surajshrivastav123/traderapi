var express = require('express');
var path = require('path');
const axios = require('axios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//app.use(express.json())
//app.use(express.urlencoded({extended:false}))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3008;

var router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Welcome!' });
});

router.get('/profile/:id', (request, response) => {
  const profileId = request.params.id; // This will capture the profile ID
  response.render('profile', { title: 'Welcome, student!', profileId });
});

router.get('/pricing', function (request, response) {
  response.render('price');
});
router.get('/speaker', function (request, response) {
  response.render('speaker');
});
router.get('/mentor', function (request, response) {
  response.render('mentor');
});
router.get('/sponsor', async (req, res) => {
    try {
        console.log('Fetching sponsors...'); // Log start
        // const response = await fetch('https://backend.gaganahuja.com/api/v1/sponser/get');
        // console.log('Response status:', response.status); // Log response status
        
        // Check if the response is ok (status in the range 200-299)
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const sponsor = await response.json();
        // console.log("sponsor data:", sponsor); // Log the sponsor data

        res.render('sponser'); // Pass the sponsors array to the EJS view
    } catch (error) {
        console.error('Error fetching sponsors:', error.message); // Log the error message
        res.status(500).send('Error fetching sponsors');
    }
});

router.get('/venue', async (req, res) => {
  try {
    res.render('venue');
  } catch (error) {
    console.error('Error fetching venues:', error.message);
    res.status(500).send('Error fetching events');
  }
});
router.get('/about', function (request, response) {
  response.render('about');
});
router.get('/gallery', function (request, response) {
  response.render('gallery');
});
router.get('/about', function (request, response) {
  response.render('about');
});
router.get('/agenda', function (request, response) {
  response.render('agenda');
});
router.get('/privacy-policy', function (request, response) {
  response.render('privacy-policy');
});
router.get('/terms-condition', function (request, response) {
  response.render('term_condition');
});
router.get('/refund-policy', function (request, response) {
  response.render('refund-policy');
});
router.get('/register/:id', (request, response) => {
  const priceId = request.params.id;
  response.render('register', { title: 'Welcome, student!', priceId });
});



app.use('/', router);


app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
