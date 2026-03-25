LMS Project
Project Overview

WorkerConnect LMS is a web app where people can:

Take courses
Track their progress
Manage users

There are different roles:

Learners (students)
Admins
Content creators

The system is built to be easy to expand and well organized.

Tech Stack

Frontend:

React.js
Tailwind CSS

Backend:

Node.js
Express.js

Databases:

PostgreSQL → for users and login
MongoDB → for courses and progress

Authentication:

JWT (for secure login and roles)

API Testing:

Postman
Setup Instructions
1. Clone the project
git clone https://github.com/LMS-prototype
cd workerconnect-lms
2. Install dependencies

Backend:

cd backend
npm install

Frontend:

cd ../frontend
npm install
Environment Variables

Create a .env file in the backend folder:

PORT=5000
JWT_SECRET=your_jwt_secret
PG_USER=postgres
PG_PASS=your_postgres_password
PG_DB=lms
PG_HOST=localhost
PG_PORT=5432
MONGO_URI=mongodb://localhost:27017/lms
Run the App

Backend:

cd backend
npm run dev

Frontend:

cd ../frontend
npm start
API

All endpoints are tested in Postman.

Examples:
POST /auth/login → login
POST /auth/register → create account
GET /courses → get all courses
POST /lessons → add lesson (admin only)
POST /lessons/complete → mark lesson as done
Database Design
PostgreSQL (SQL)

Used for:

Users
Login
Roles

Why:

Strong structure
Secure and reliable
MongoDB (NoSQL)

Used for:

Courses
Lessons
Progress

Why:

Flexible
Good for storing complex data
Trade-off

Using two databases is harder to manage, but:

Makes the system more flexible
Helps it scale better
Microservices Idea

The app can be split into smaller services:

Auth Service → login and users
Course Service → courses and lessons
Progress Service → tracking progress
Notification Service → alerts and messages
Pros:
Easier to scale
Easier to manage parts separately
Cons:
More complex system
Services need to communicate
Key Decisions
React helps load pages faster
Node.js + Express make fast APIs
SQL keeps user data safe
NoSQL makes course data flexible
JWT keeps login simple and secure
