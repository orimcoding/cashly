const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // Logging middleware
const helmet = require('helmet'); // Security middleware

const app = express();

// Middleware
app.use(helmet()); // Adds security headers
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Logs HTTP requests

// Placeholder routes (remove after adding actual routes)
app.get('/', (req, res) => {
    res.send('Welcome to Cashly API!');
});

module.exports = app;