# JWT Authentication

This repository demonstrates the implementation of JSON Web Token (JWT) authentication in a web application. It provides a secure way to manage user authentication and protect API endpoints.

## Features

- **User Registration and Login**: Users can register with a unique username and password, and log in to receive a JWT for authenticated access.
- **Protected Routes**: Certain API endpoints are secured and require a valid JWT for access.
- **Role-Based Authorization**: Assign roles to users and restrict access to specific routes based on user roles.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript

## API Endpoints

- `POST /api/register`: Register a new user.
- `POST /api/login`: Authenticate a user and receive a JWT.
- `GET /api/protected`: Access a protected route (requires JWT).
- `GET /api/admin`: Access an admin-only route (requires JWT and admin role).

## Usage

1. **Register a new user** by sending a POST request to `/api/register` with `username` and `password`.
2. **Log in** by sending a POST request to `/api/login` with the registered `username` and `password`. The response will include a JWT.
3. **Access protected routes** by including the JWT in the `Authorization` header of your requests:

   ```http
   Authorization: Bearer your_jwt_token
   ```
![image](https://github.com/user-attachments/assets/69260404-b207-4e57-8e13-bf9008a8e1b3)
![image](https://github.com/user-attachments/assets/1d6999d0-26da-46c0-a394-5e43928bd2ad)

