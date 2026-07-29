# RenewCred CMS

A full-stack Content Management System (CMS) built using the MERN stack. The application allows administrators to create, edit, publish, and manage website pages through a secure admin dashboard, while visitors can access published pages through a public website.

---

## Features

### Admin Dashboard

- Secure administrator login using JWT authentication
- Create, edit and delete pages
- Save pages as Draft or Published
- Block-based content editor
  - Heading
  - Paragraph
  - Equation
- Slug-based page management
- Dashboard for managing all pages

### Public Website

- Home page
- Dynamic page rendering based on page slug
- Displays only published pages
- Responsive layout
- Breadcrumb navigation
- Clean content rendering using reusable block components

---

# Admin Login

Use the following credentials to access the admin dashboard.

Email:
```
admin@renewcred.com
```

Password:
```
Admin@123
```

> Replace the password above with the one seeded in your database.

---

# Technology Choices

## Frontend

- React.js
- React Router DOM
- Axios
- CSS

### Why React?

React provides a component-based architecture that makes the application easier to organize and maintain. Reusable components such as the page renderer, layout, navbar, and footer help keep the UI modular.

---

## Backend

- Node.js
- Express.js

### Why Express?

Express offers a lightweight and flexible way to build REST APIs while keeping routing and middleware simple.

---

## Database

- MongoDB
- Mongoose

### Why MongoDB?

Since page content consists of different block types with varying structures, MongoDB's document model allows flexible storage without requiring multiple relational tables.

---

## Authentication

- JSON Web Tokens (JWT)
- bcrypt

### Why JWT?

JWT enables stateless authentication for the admin dashboard. Protected routes can only be accessed by authenticated administrators while public content remains accessible without login.

---

# Architecture Overview

The project follows a client-server architecture.

```
                Public Website
                      │
                      │
               React Frontend
                      │
              REST API (Express)
                      │
        Controllers → Services → Models
                      │
                   MongoDB
```

### Frontend

The frontend is divided into two separate applications:

- Admin Frontend
- Public Frontend

This separation keeps administration features isolated from the public website and makes each application easier to maintain.

### Backend

The backend follows a layered architecture:

- Routes handle API endpoints.
- Controllers process incoming requests.
- Services contain business logic.
- Models interact with MongoDB.

This separation keeps responsibilities clear and improves maintainability.

---

# Project Structure

```
backend/
    controllers/
    middleware/
    models/
    routes/
    services/

admin-frontend/
    components/
    pages/
    services/

public-frontend/
    components/
    pages/
    services/
```

---

# Assumptions

The following assumptions were made during development:

- Only authenticated administrators can create, edit, or delete pages.
- Visitors can only access pages with the **Published** status.
- Each page uses a unique slug for routing.
- The homepage is part of the public website, while page content is managed through the CMS.
- The content editor currently supports Heading, Paragraph, and Equation blocks.
- Equations are displayed as formatted text blocks and are not rendered using a mathematical rendering library.
- Uploaded media management was considered outside the scope of the current implementation.
- The system is designed for a single administrator account.
- Validation is performed on both the client and server wherever applicable.

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone <repository-url>
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 3. Install Admin Frontend

```bash
cd admin-frontend
npm install
```

---

## 4. Install Public Frontend

```bash
cd public-frontend
npm install
```

---

# How to Run the Project

## 1. Start the Backend

```bash
cd backend
npm run dev
```

The backend will start on:

```
http://localhost:5000
```

---

## 2. Start the Admin Frontend

```bash
cd admin-frontend
npm start
```

The admin dashboard will be available at:

```
http://localhost:3000
```

---

## 3. Start the Public Frontend

```bash
cd public-frontend
npm start
```

The public website will be available at:

```
http://localhost:3001
```

*(Use the port configured on your machine if it differs.)*
# API Overview

### Public APIs

```
GET /api/v1/pages/public
GET /api/v1/pages/slug/:slug
```

### Protected APIs

```
POST   /api/v1/pages
GET    /api/v1/pages
GET    /api/v1/pages/:id
PUT    /api/v1/pages/:id
DELETE /api/v1/pages/:id
```

---

# Future Improvements

- Support additional block types such as Images and Lists
- Rich text editing
- Drag-and-drop block ordering
- Media upload support
- Search and filtering
- Multiple administrator roles
- Homepage content management through the CMS

---

# Author

K.Sathvik Varma
Developed as part of the RenewCred CMS assignment.