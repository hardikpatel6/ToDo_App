import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'pending'
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || formData.title.length < 3) {
            alert('Title must be at least 3 characters long');
            return;
        }
        if (formData.description.length > 200) {
            alert('Description must be less than 200 characters');
            return;
        }
        onAdd(formData);
        setFormData({ title: '', description: '', status: 'pending' });
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded shadow mb-6"
        >
            <input
                type="text"
                placeholder="Title"
                className="border p-2 w-full mb-2"
                value={formData.title}
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Description"
                className="border p-2 w-full mb-2"
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
            />
            <select className="border p-2 w-full mb-2"
                value={formData.status}
                onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                }
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm;