# Task Manager REST API

A backend RESTful API built using **Node.js**, **Express**, and **MySQL** that allows users to manage tasks with full CRUD functionality.


## Features

- Create a task
- Fetch all tasks
- Update a task
- Delete a task
- RESTful API design
- MySQL database integration
- Error handling and validation


## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- REST APIs


## Project Structure

src/
├── app.js
├── server.js
├── db.js
├── routes/
│   └── taskRoutes.js
├── controllers/
│   └── taskControllers.js
└── models/
└── taskModel.js


## Code

## API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/tasks | Fetch all tasks |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## How to Run Locally

```bash
npm install
node src/server.js

## Server runs at:
http://localhost:3000


## Samplpe POST Request

{
  "title": "Learn Node.js",
  "description": "Build Task Manager API",
  "status": "Pending"
}

