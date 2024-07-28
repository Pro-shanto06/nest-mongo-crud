# NestMongoCRUD

NestMongoCRUD is a CRUD application built with NestJs, Mongoose, and MongoDB. This application allows you to perform basic CRUD operations on users.

## Features

- Create a new user
- Retrieve a user by ID
- Retrieve a list of users with pagination
- Update an existing user
- Delete a user
- Validation for user input
- Error handling for duplicate entries and invalid data

## Technologies Used

- **NestJs**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **MongoDB**: A NoSQL database for storing user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **bcryptjs**: A library to hash user passwords for security.
- **Class-Validator**: A validation library for defining and validating user data.
- **Class-Transformer**: A library to transform and validate user data objects.

## Project Setup

### Prerequisites

- Node.js
- MongoDB Atlas Account
- NestJs CLI

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Pro-shanto06/nest-mongo-crud
    cd nest-mongo-crud
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm run start
    ```

## API Endpoints

### Create a User

- **URL:** `/users`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "fname": "Proshanto",
        "lname": "Saha",
        "email": "pro@gmail.com",
        "phone": "01711111111",
        "password": "Password123!",
    }
    ```
- **Response:**
    ```json
    {
        "_id": "60d21b4667d0d8992e610c85",
        "fname": "Proshanto",
        "lname": "Saha",
        "email": "pro@gmail.com",
        "phone": "01711111111",
        "password": "$2a$10$nbD1bxYRVAJYPJOl6IK5fOTL1wtn1BLec9ViP8MyGvLKgs4mxJk66",
        "userType": "user",
        "status": "active",
        "createdAt": "2024-07-28T08:01:54.439Z",
        "updatedAt": "2024-07-28T08:01:54.439Z",
    }
    ```

### Get a User by ID

- **URL:** `/users/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "_id": "60d21b4667d0d8992e610c85",
        "fname": "Proshanto",
        "lname": "Saha",
        "email": "pro@gmail.com",
        "phone": "01711111111",
        "password": "$2a$10$nbD1bxYRVAJYPJOl6IK5fOTL1wtn1BLec9ViP8MyGvLKgs4mxJk66",
        "userType": "user",
        "status": "active",
        "createdAt": "2024-07-28T08:01:54.439Z",
        "updatedAt": "2024-07-28T08:01:54.439Z",
    }
    ```

### Get All Users with Pagination

- **URL:** `/users`
- **Method:** `GET`
- **Query Parameters:** `page` (default: 1), `limit` (default: 10)
- **Response:**
    ```json
    [
        {
            "_id": "60d21b4667d0d8992e610c85",
            "fname": "Proshanto",
            "lname": "Saha",
            "email": "pro@gmail.com",
            "phone": "01711111111",
            "password": "$2a$10$nbD1bxYRVAJYPJOl6IK5fOTL1wtn1BLec9ViP8MyGvLKgs4mxJk66",
            "userType": "user",
            "status": "active",
            "createdAt": "2024-07-28T08:01:54.439Z",
            "updatedAt": "2024-07-28T08:01:54.439Z",
        },
        {
            "_id": "60d21b4667d0d8992e610c86",
            "fname": "Abir",
            "lname": "Saha",
            "email": "Abir@gmail.com",
            "phone": "01811111111",
            "password": "$2a$10$nbD1bxYRVAJYPJOl6IK5fOTL1wtn1BLec9ViP8MyGvLKgs4mxJk66",
            "userType": "user",
            "status": "active",
            "createdAt": "2024-07-28T08:01:54.439Z",
            "updatedAt": "2024-07-28T08:01:54.439Z",
        }
    ]
    ```

### Update a User

- **URL:** `/users/:id`
- **Method:** `PATCH`
- **Request Body:**
    ```json
    {
        "fname": "Pro",
    }
    ```
- **Response:**
    ```json
    {
        "message": "User updated successfully"
    }
    ```

### Delete a User

- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
        "message": "User deleted successfully"
    }
    ```