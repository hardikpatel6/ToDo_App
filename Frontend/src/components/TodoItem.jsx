
const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">{todo.title}</h2>
        <p className="text-gray-700 mb-4">Description : {todo.description}</p>
        <p className="text-gray-700 mb-4">Status : {todo.status}</p>
        <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => onUpdate(todo._id,{
                title: prompt('Enter new title', todo.title) || todo.title,
                description: prompt('Enter new description', todo.description) || todo.description,
                status: prompt('Enter new status (pending, in-progress, completed)', todo.status) || todo.status    
            })}>
                Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => onDelete(todo._id)}>
                Delete
            </button>
        </div>
    </div>
  )
}

export default TodoItem