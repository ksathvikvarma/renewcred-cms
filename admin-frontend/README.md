# RenewCred CMS Assignment

## Overview

This project is a simple Content Management System (CMS) built using the MERN stack. It allows an administrator to log in, create, edit, update, and delete pages through an admin dashboard. The public frontend displays only published pages by fetching data from the backend APIs.

The project is divided into three parts:

- Backend API
- Admin Frontend
- Public Frontend

---

## Setup Instructions

### Prerequisites

- Node.js (v18 or later)
- MongoDB
- Git

### Clone the repository

```bash
git clone <repository-url>
cd renewcred-cms
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

---

### Admin Frontend Setup

```bash
cd admin-frontend
npm install
npm start
```

The admin application runs on:

```
http://localhost:3001
```

---

### Public Frontend Setup

```bash
cd public-frontend
npm install
npm start
```

The public application runs on:

```
http://localhost:3000
```

---

## Technology Choices

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Admin Frontend

- React
- React Router
- Axios
- CSS

### Public Frontend

- React
- React Router
- Axios
- CSS

---

## Architecture Overview

The application follows a simple client-server architecture.

- The backend exposes REST APIs for authentication and page management.
- The Admin Frontend is used by authenticated users to manage content.
- The Public Frontend consumes public APIs and displays published pages.
- MongoDB stores users and page data.

```
Admin Frontend
       |
       | Protected API
       |
Backend API
       |
       |
   MongoDB
       |
       |
Public Frontend
```

---

## Assumptions

- Only authenticated administrators can access the CMS.
- Only published pages are visible on the public website.
- Draft pages remain accessible only through the admin panel.
- One administrator account is sufficient for this assignment.
- MongoDB is available locally or through MongoDB Atlas.
- The backend server is running before starting the frontend applications.
- Page slugs are expected to be unique and are used for public page routing.
- Each page currently stores its content as a single text block.
- Authentication is handled using JWT, and the token is stored in the browser's local storage.
- Modern browsers (Chrome, Edge, or Firefox) are assumed for running the application.
## How to Run the Project

### Step 1

Start MongoDB.

### Step 2

Start the backend.

```bash
cd backend
npm install
npm start
```

### Step 3

Start the admin frontend.

```bash
cd admin-frontend
npm install
npm start
```

### Step 4

Start the public frontend.

```bash
cd public-frontend
npm install
npm start
```

### Step 5

Open the applications.

Admin:

```
http://localhost:3001
```

Public:

```
http://localhost:3000
```

Login using the administrator credentials and manage pages through the dashboard.

## Demo Credentials

Use the following administrator account to access the CMS.

**Email**

```
admin@renewcred.com
```

**Password**

```
Admin@123
```