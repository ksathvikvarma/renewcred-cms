# RenewCred CMS

A full-stack Content Management System (CMS) built with **Node.js, Express.js, MongoDB, and React**. The project provides a secure admin panel for managing website pages and a public frontend for displaying published content.

> **Project Status:** 🚧 In Development

---

## Features

### Completed

- Secure Admin Registration (One-Time Registration)
- Admin Login with JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Create CMS Pages
- MongoDB Database Integration
- Layered Backend Architecture (Controller → Service → Model)

### In Progress

- Get All Pages API
- Update Page API
- Delete Page API
- Admin Dashboard (React)
- Public Website
- Block-based Page Editor

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- dotenv

### Frontend (Planned)

- React
- Vite
- Redux Toolkit
- Tailwind CSS

---

## Project Structure

```
renewcred-cms/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env.example
│
├── admin-frontend/
├── public-frontend/
├── docs/
└── README.md
```

---

## Backend Architecture

```
Client
   │
   ▼
Routes
   │
   ▼
Authentication Middleware
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Models
   │
   ▼
MongoDB
```

The project follows a layered architecture to separate routing, business logic, database operations, and authentication.

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register the first admin |
| POST | `/api/v1/auth/login` | Admin login |

### Pages

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/pages` | Create a new page (Protected) |

Additional CRUD APIs are currently under development.

---

## Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/renewcred_cms

JWT_SECRET=your_secret_key

NODE_ENV=development
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to backend

```bash
cd renewcred-cms/backend
```

### Install dependencies

```bash
npm install
```

### Start MongoDB

Ensure MongoDB is running locally.

### Start the development server

```bash
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

## Current Development Progress

- ✅ Authentication Module
- ✅ Authorization using JWT
- ✅ Page Creation API
- 🚧 Page Management APIs
- 🚧 Admin Dashboard
- 🚧 Public Website

---

## Future Enhancements

- Rich Block Editor
- Image Upload Support
- SEO Metadata
- Draft & Published Workflow
- Search Functionality
- Pagination
- Role-Based Access Control
- Media Library

---

## Author

**Sathvik Varma Kutcharlapati**

```

