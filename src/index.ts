const express = require('express');
const path = require('path');
require('./database/mongo');
const port = 7000;

const app = express();

const featureRoute = require('./routes/feature');

app.use(express.json())

app.use('/api/features',featureRoute);

app.listen(port,()=>{
    console.log(`App started on port :${port}`);
})

