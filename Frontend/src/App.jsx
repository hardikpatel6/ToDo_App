import { useState,useEffect } from 'react';
import './App.css';
import TodoForm  from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api/api';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data.todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const handleAdd = async (newTodo) => {
    await createTodo(newTodo);
    fetchTodos();
  };
  const handleUpdate = async (id, updatedData) => {
    await updateTodo(id, updatedData);
    fetchTodos();
  };
  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">ToDo App</h1>
         <TodoForm onAdd={handleAdd} />
         <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
