const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize the app first
const app = express();

// Use CORS middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: 'GET,POST,PUT,DELETE', // Specify allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
  })
);

app.use(express.json());

// Import mock data
const expenses = require('./data/expenses.json');
const goals = require('./data/goals.json');
const rewards = require('./data/rewards.json');
const user = require('./data/user.json');

// Mock authentication endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Backend received login request:', email, password); // Debugging

  if (email === 'test@example.com' && password === 'password123') {
    res.json({ name: 'John Doe', email, token: 'mock-jwt-token' });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});




app.post('/api/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

app.get('/api/goals', (req, res) => {
  res.json(goals);
});

app.get('/api/rewards', (req, res) => {
  res.json(rewards);
});

// Start the server
app.listen(4000, () => {
  console.log('Backend server running on http://localhost:4000');
});
