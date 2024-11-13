const express = require('express');
const router = express.Router();
const {
    createExpense,
    getExpenses,
    updateExpense,
    deleteExpense,
} = require('../controllers/expenseController');
const { authMiddleware } = require('../middlewares/authMiddleware');

// Middleware to ensure authenticated access
router.use(authMiddleware);

// Create a new expense
router.post('/', createExpense);

// Get all expenses for the logged-in user
router.get('/', getExpenses);

// Update an existing expense
router.put('/:id', updateExpense);

// Delete an expense
router.delete('/:id', deleteExpense);

module.exports = router;
