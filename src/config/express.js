const express = require('express');
const bodyParser = require('body-parser');
const router = require('../api/routers/v1/user.router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/v1',router)
module.exports = app;