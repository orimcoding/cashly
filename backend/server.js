const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const expenses = require('./data/expenses.json');
const goals = require('./data/goals.json');
const rewards = require('./data/rewards.json');
const user = require('./data/user.json');

// Mock authentication endpoint
app.post('/api/login', (req, res) => {
  // In reality, you'd check req.body credentials
  // Here, just return mock user data
  res.json({ ...user, token: "mock-jwt-token" });
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

app.get('/', (req, res) => {
  res.send('Welcome to the Cashly Backend!');
});

app.listen(4000, () => {
  console.log('Backend server running on http://localhost:4000');
});
