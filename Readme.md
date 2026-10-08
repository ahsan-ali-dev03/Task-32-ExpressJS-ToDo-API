# Task 32 - ExpressJS To-Do List API

A RESTful To-Do List API built with Node.js and Express.js.

## Run Locally

```bash
npm install
npm start
```

The server runs on:

```text
http://localhost:5000
```

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | API information |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get one task |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Example POST Body

```json
{
  "title": "Complete Task 32",
  "description": "Finish Express.js API assignment",
  "completed": false
}
```

## Deployment

This project can be deployed on Render as a Web Service.

Build Command:
```text
npm install
```

Start Command:
```text
npm start
```

Note: Tasks are stored in memory for this assignment, so they reset whenever the server restarts.
