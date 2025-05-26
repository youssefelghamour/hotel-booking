/**
 * Express API server with MongoDB connection
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const port = 5000;

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',  // your frontend domain
  credentials: true, // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());

app.use('/', routes);

// Ensure the database connection is established before running the API app
(async () => {
    // Connect to MongoDB using Mongoose
    await mongoose.connect('mongodb://localhost:27017/hotel');

    app.listen(port, () => {
        console.log(`API is running on port ${port}`);
    });
})();