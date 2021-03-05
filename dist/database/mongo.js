"use strict";
var mongoose = require('mongoose');
var dbUrl = 'mongodb://127.0.0.1:27017/featuresDB';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.once('open', function () {
    console.log("Connected to " + dbUrl);
});
db.on('error', function (err) {
    console.log(err);
});
module.exports = db;
