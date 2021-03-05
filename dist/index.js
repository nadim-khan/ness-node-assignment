"use strict";
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('./database/mongo');
var port = 7000;
var app = express();
var featureRoute = require('./routes/feature');
app.use(express.json());
app.use('/api/features', featureRoute);
app.listen(port, function () {
    console.log("App  started on port :" + port);
});
