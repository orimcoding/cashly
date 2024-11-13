const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// User sign-up
router.post('/signup', signup);

// User login
router.post('/login', login);

module.exports = router;
