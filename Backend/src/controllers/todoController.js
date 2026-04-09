const Todo = require('../models/todoSchema');

const normalizeStatus = (status) => {
    if (!status) return 'pending';

    const statusMap = {
        pending: 'pending',
        'in progress': 'in-progress',
        'in-progress': 'in-progress',
        completed: 'completed'
    };

    return statusMap[String(status).trim().toLowerCase()];
};

const addNewTodo = async (req, res) => {
    try {
        // console.log(req.body);
        const { title, description, status } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (title.length < 3 || title.length > 100) {
            return res.status(400).json({ error: 'Title must be between 3 and 100 characters' });
        }
        if (description.length > 200) {
            return res.status(400).json({ error: 'Description must be less than 200 characters' });
        }

        const normalizedStatus = normalizeStatus(status);
        if (!normalizedStatus) {
            return res.status(400).json({ error: 'Status must be pending, in-progress, or completed' });
        }

        const newTodo = {
            title,
            description,
            status: normalizedStatus
        };

        const createdTodo = await Todo.create(newTodo);
        res.status(201).json({ message: 'Todo added successfully', todo: createdTodo });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }

        res.status(500).json({ error: 'Failed to add todo' });
    }
}

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ todos });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve todos' });
    }
}
const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        } else {
            res.status(200).json({ todo });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve todo' });
    }
}
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description, status }, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });   
        } else {
            res.status(200).json({ message: 'Todo updated successfully', todo: updatedTodo });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }
};
module.exports = { addNewTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };