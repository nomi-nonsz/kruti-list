const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const PORT = 6969;

app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
    console.log("Server is running...");
});