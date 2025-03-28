# Task Demo For A Book Store Server

This is the backend server for a demo task with API endpoints. Built with **Node.js**, **Express.js**, and **MongoDB**

## Features

### Admin Features

- ➕ Add new trips with details and images.
- 📅 View all reservations for each trip.
- 🔒 Secure authentication and authorization for admins.

## 🛠 Tech Stack

- **Node.js** – Runtime environment.
- **Express.js** – Web framework for handling API requests.
- **MongoDB** – NoSQL database for storing trips, users, and reservations.
- **Mongoose** – ODM for interacting with MongoDB.
- **JWT** – Secure authentication and authorization.

## 🚀 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Kareem-Mohamed-Wardany/Demo-Api.git
   ```

2. **Navigate to the project folder:**

   ```sh
   cd Demo-Api
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file and configure the required credentials:

   ```env
    PORT = 5000
    DB_CONNECTION = DB_Connection_String
    JWT_SECRET = your_jwt_secret
    JWT_LIFETIME = 1h
   ```

5. **Run the server:**

   ```sh
   npm start
   ```

6. **API Endpoints:**
   The server runs on `http://localhost:5000`, providing RESTful API endpoints:

   ### **Auth Routes**

   - `/api/v1/auth/login` → Handles authentication (login).
   - `/api/v1/auth/register` → Handles authentication (signup).

   ### **Admin Routes** (Protected)

   - `/api/v1/admin/books/add` → Admins can add a book
   - `/api/v1/admin/books/get` → Admins can get all books
