# Setup Backend Frontend

Full-stack Todo application with:
- Backend: Node.js, Express, MongoDB (Mongoose)
- Frontend: React + Vite + Axios

## Project Structure

```text
Setup_Backend_Frontend/
├── Backend/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── controllers/
│       ├── db/
│       ├── models/
│       └── routes/
├── Frontend/
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── api/
│       └── components/
└── README.md
```

## Requirements

- Node.js 18+
- npm 9+
- MongoDB running locally on `mongodb://127.0.0.1:27017`

## Environment Variables

### Backend/.env

```env
PORT=4000
```

### Frontend/.env

```env
VITE_BASE_URL=http://localhost:4000/api/v1/todos/todo
```

## Installation

Install dependencies in both apps:

```bash
cd Backend
npm install

cd ../Frontend
npm install
```

## Run the Application

Open two terminals.

1. Start backend

```bash
cd Backend
npm run dev
```

Backend runs at `http://localhost:4000`.

2. Start frontend

```bash
cd Frontend
npm run dev
```

Frontend runs at `http://localhost:5173`.

## API Base Route

`http://localhost:4000/api/v1/todos/todo`

## API Endpoints

### Create Todo

- Method: `POST`
- URL: `/api/v1/todos/todo/`

Request body:

```json
{
	"title": "Hello",
	"description": "I completed the code.",
	"status": "In Progress"
}
```

Notes:
- `title` is required, 3 to 100 characters.
- `description` is required and up to 200 characters.
- Status values accepted by the schema: `pending`, `in-progress`, `completed`.
- Backend also normalizes `In Progress` to `in-progress`.

### Get All Todos

- Method: `GET`
- URL: `/api/v1/todos/todo/`

### Get Todo by ID

- Method: `GET`
- URL: `/api/v1/todos/todo/:id`

### Update Todo

- Method: `PUT`
- URL: `/api/v1/todos/todo/:id`

### Delete Todo

- Method: `DELETE`
- URL: `/api/v1/todos/todo/:id`

## Backend Behavior

- CORS is enabled for frontend origin `http://localhost:5173`.
- MongoDB database used: `MyraTechnoLabDB`.
- Connection is currently hardcoded in backend connection file:
	`mongodb://127.0.0.1:27017/MyraTechnoLabDB`

## Frontend Behavior

- Frontend calls the backend through Axios client in `src/api/api.js`.
- API base URL is read from `VITE_BASE_URL`.

## Useful Commands

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm run dev
npm run build
npm run lint
```

## Common Issues

### 500 on POST /todo

Possible reasons:
- MongoDB not running
- Invalid request payload
- Invalid status value that cannot be normalized

Quick checks:
- Confirm backend is running on port `4000`
- Confirm frontend `.env` points to backend base URL
- Confirm MongoDB is running locally

## License

ISC
