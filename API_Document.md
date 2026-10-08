# Task 32 API Documentation

## Create Task
**POST** `/api/tasks`

Request body:
```json
{
  "title": "Complete Task 32",
  "description": "Finish Express.js assignment",
  "completed": false
}
```

## Get All Tasks
**GET** `/api/tasks`

Returns an array containing all tasks.

## Get One Task
**GET** `/api/tasks/:id`

Example:
`GET /api/tasks/1`

## Update Task
**PUT** `/api/tasks/:id`

Request body:
```json
{
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}
```

## Delete Task
**DELETE** `/api/tasks/:id`

Example:
`DELETE /api/tasks/1`

## CRUD Mapping

- Create = POST
- Read = GET
- Update = PUT
- Delete = DELETE
