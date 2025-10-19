# Project Management Backend

A secure, role-based RESTful API for collaborative project management. This backend service enables teams to manage projects, tasks, subtasks, notes, and users efficiently with robust authentication and authorization features.

## Features

- **User Authentication & Authorization**
  - JWT-based auth with refresh tokens
  - Role-based access control: Admin, Project Admin, Member
  - Email verification & password reset support

- **Project Management**
  - Create, update, delete, and view projects
  - Role-based project member management

- **Task & Subtask Management**
  - Task creation, assignment, file attachments
  - Hierarchical subtasks with completion tracking

- **Notes**
  - Admins can add, edit, and delete project notes

- **File Uploads**
  - Multiple file attachments per task with secure storage

- **System Health**
  - Health check endpoint for service monitoring

## API Overview

- Base URL: `/api/v1/`
- Key Routes:
  - `/auth` – Authentication & user management
  - `/projects` – Project CRUD & member control
  - `/tasks` – Task and subtask operations
  - `/notes` – Project notes management
  - `/healthcheck` – System status

## Tech Stack

- **Node.js**, **Express.js**
- **JWT** for auth
- **Multer** for file uploads
- **MongoDB** (or your DB of choice)
- CORS-enabled and input validated

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/parrotbloom/project-management-backend

   cd project-management-backend
   ```

2. Install dependencies:

   ```
   npm install bcrypt cors dotenv express jsonwebtoken mailgen mongoose nodemailer
   ```

3. Create a .env file with necessary environment variables (JWT secrets, DB URI, etc.).

4. Run the server:
   ```
   npm run dev
   ```
