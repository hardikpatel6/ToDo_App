const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const todoRoutes = require('./src/routes/todoRoutes');
const connectDB = require('./src/db/connection');

const port = process.env.PORT || 3000;
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to match your frontend URL and port
    credentials: true,
    httpOnly: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Mock data for demonstration


app.use("/api/v1/todos/todo", todoRoutes);
connectDB();
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});