const express = require('express');
const router = express.Router();
const {
    createGoal,
    getGoals,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController');
const { authMiddleware } = require('../middlewares/authMiddleware');

// Middleware to ensure authenticated access
router.use(authMiddleware);

// Create a new savings goal
router.post('/', createGoal);

// Get all goals for the logged-in user
router.get('/', getGoals);

// Update an existing goal
router.put('/:id', updateGoal);

// Delete a goal
router.delete('/:id', deleteGoal);

module.exports = router;
