/**
 * Express API server with MongoDB connection
 */
const express = require('express');
const cors = require('cors');
const dbClient = require('../utils/db');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
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
    // Wait for the db connection
    await dbClient.connect();
    app.listen(port, () => {
        console.log(`API is running on port ${port}`);
    });
})();