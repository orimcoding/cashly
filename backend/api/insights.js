const express = require('express');
const router = express.Router();
const { generateInsights } = require('../controllers/insightController');
const { authMiddleware } = require('../middlewares/authMiddleware');

// Middleware to ensure authenticated access
router.use(authMiddleware);

// Generate AI-driven insights for the user
router.get('/', generateInsights);

module.exports = router;
