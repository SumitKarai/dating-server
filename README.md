# Dating App - Backend Server

This is the backend server for the Dating App, built using Node.js and Express. It handles API requests, database interactions, and user authentication.

##  Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB & Mongoose**: NoSQL database and object modeling tool.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Bcrypt.js**: For hashing passwords.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: Module to load environment variables.

## 🛠️ Installation & Setup

1.  **Navigate to the server directory:**
    ```bash
    cd dating-server
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root of the `dating-server` directory and add the necessary environment variables (e.g., `PORT`, `MONGO_URI`, `JWT_SECRET`).

4.  **Run the server:**
    ```bash
    npm run dev
    ```
    Or for production start:
    ```bash
    npm start
    ```
    The server typically runs on port `3000` or the port defined in your `.env` file.

## 📜 API Endpoints

The API provides endpoints for:
- **Authentication**: User registration and login.
- **Users**: Fetching and updating user profiles.
- **Matches**: Handling user matching logic (if implemented).

## 📁 Project Structure

- `server.js`: Entry point of the server application.
- `models/`: Mongoose schemas and models.
- `routes/`: API route definitions.
- `controllers/`: Logic for handling API requests.
- `middleware/`: Custom middleware (e.g., auth checks).
