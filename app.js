// Load the express module installed to constant express
const express = require('express');
// Load the path module installed to constant path
const path = require('path');
//Load the cookieParser module installed to constant cookieParser
const cookieParser = require('cookie-parser');
//Load the morgan module installed to constant logger
const logger = require('morgan');
//Load the index router path from './routes/index
const indexRouter = require('./routes/index');
//excute function express()
const app = express();
// use middleware cors
// app.use(cors());
// use morgan and config
app.use(logger('dev'));
// excute and use express method translating data to json() format app level middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/news', indexRouter)
module.exports = app;
