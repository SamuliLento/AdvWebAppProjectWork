require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors = require('cors');

var usersRouter = require('./routes/users');
var codesRouter = require('./routes/codes');
var commentsRouter = require('./routes/comments');

var app = express();

const mongoDB = "mongodb://localhost:27017/testdb";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/codes', codesRouter);
app.use('/api/comments', commentsRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("..", "client", "build")));
    app.get("*", (req, res) => 
        res.sendFile(path.resolve("..", "client", "build", "index.html"))
    );
} else if (process.env.NODE_ENV === "development") {
    var corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
}

module.exports = app;
