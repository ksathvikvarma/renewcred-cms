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

---

## A few suggestions before the first push

1. **Remove the temporary `/api/v1/profile` endpoint** before the final submission if it isn't used by the frontend.
2. After creating the README, run:

```bash
git add README.md
git commit --amend --no-edit
```

Since you haven't pushed yet, this will **add the README to your first commit**, keeping your Git history clean with a single initial commit instead of two.

3. Before pushing, create the GitHub repository named:

```
renewcred-cms
```

without initializing it with a README, `.gitignore`, or license.

---

I also have one more recommendation. Before your final submission tomorrow, we should revisit this README and enhance it with:
- a **project architecture diagram**,
- **database schema diagrams**,
- and **screenshots/GIFs** of the admin dashboard once the frontend is ready.

Those additions make a repository stand out and demonstrate that you can document software professionally, not just write code.