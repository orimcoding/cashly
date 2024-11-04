const express = require('express');
const { generateInsights } = require('../controllers/insightController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.get('/', generateInsights);

module.exports = router;
