require('dotenv/config');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const { passport } = require('./middleware/passport');

const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'client', 'build')));

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Mongodb connected:', process.env.DB_URI))
.catch(err => console.log('Mongodb connection error:', err.message));

module.exports = app;
