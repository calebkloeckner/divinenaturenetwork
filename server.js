const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// const User = require('./models/Users.js');
const path = require('path');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { sacure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
app.set('view engine', 'ejs');

// Connect to the Mongo DB
mongoose.connect('mongodb://admin:admin@ds157639.mlab.com:57639/divinenaturenetwork' || "mongodb://localhost/sermons", function(error){
    if(error) {
        return console.log("its broke");
    } else {
        console.log("its not broke");
    }
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});