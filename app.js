const express = require('express');
const bodyParser = require('body-parser');

// Imports routes
const product = require('./routes/product');

//Initialize express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dbUserName = 'max';
const dbPassword = 'testtest'
let dev_db_url = 'mongodb+srv://' + dbUserName + ':' + dbPassword + '@wemakeit-vgomq.gcp.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setup BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Add routes
app.use('/getAllProducts', product);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});