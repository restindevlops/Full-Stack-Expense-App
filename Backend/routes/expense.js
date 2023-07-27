const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

// add-expense => POST

router.post('/add-expense', expenseController.postAddExpense);

// get-expenses => GET

router.get('/get-expenses', expenseController.getExpenses);

// delete-expenses => DELETE

router.delete('/delete-expense/:id', expenseController.deleteExpense);

// edit-expenses => PUT
router.delete('/edit-expense/:id', expenseController.editExpense);


module.exports = router;
