import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL || 'http://localhost:4000/api/v1/todos/todo';

const API = axios.create({
  baseURL: base_url,
});

// GET all
export const getTodos = () => API.get("/");

// CREATE
export const createTodo = (data) => API.post("/", data);

// UPDATE
export const updateTodo = (id, data) =>
  API.put(`/${id}`, data);

// DELETE
export const deleteTodo = (id) =>
  API.delete(`/${id}`);
