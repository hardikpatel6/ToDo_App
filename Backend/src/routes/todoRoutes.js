const express = require('express');
const router = express.Router();
const {addNewTodo,getAllTodos,getTodoById,updateTodo,deleteTodo} = require('../controllers/todoController');

router.get('/', getAllTodos);
router.post('/', addNewTodo);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;