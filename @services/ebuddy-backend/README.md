# Ebuddy Backend

Backend services of Ebuddy Asessment

## Directory architecture

Directory architecture of backend services

- config => Handle for configuration of application and databases.
- controller => Handle for presentation layer.
- core => Handle for configuration of Express instances.
- entities => Handle for defining of models.
- middleware => Handle for custom middlware.
- repository => Handle for database query layer.
- service => Handle for bussiness logic application.
- routes => Handle routing endpoint.
- tests => Handling for unit tests. Bonus.
- utils => Handling for utility function.

## Technology

Technology for built application

- Express
- Bcrypt
- Dotenv
- Cors
- Firebase SDK
- Nodemon
- TS Node
- Typescript

## Endpoint

Available endpoints on this application.

-- Fetch all Users

```
- URL : localhost:8000/users
- Method: GET
- Output: JSON
```

-- Fetch Users by ID

```
- URL : localhost:8000/users/:id
- Method: GET
- Output: JSON
```

-- Create Users

```
- URL : localhost:8000/users
- Method: POST
- Request Body: JSON
- Output: JSON
```

-- Update Users by ID

```
- URL : localhost:8000/users/:id
- Method: PUT
- Request Body: JSON
- Output: JSON
```

-- Delete Users by ID

```
- URL : localhost:8000/users/:id
- Method: DELETE
- Output: JSON
```
