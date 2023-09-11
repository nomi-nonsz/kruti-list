const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const routes = require('./routes');

const app = express();
const PORT = 6969;
const MONGO_URI = process.env.MONGO_URI;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(routes);

mongoose.connect(MONGO_URI);
mongoose.connection
    .on('error', (error) => {
        console.error(error);
    })
    .once('open', () => {
        console.log("MongoDB connected");
    })

app.listen(PORT, () => {
    console.log("Server is running...");
});