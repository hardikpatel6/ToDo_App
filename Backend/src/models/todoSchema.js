const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 100,
        min: 3
    },
    description: {
        type: String,
        max: 200,
    },
    status:{
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;