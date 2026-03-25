LMS Project
Project Overview

WorkerConnect LMS is a web-based learning system where users can:

Take courses
Track their progress
Manage accounts

The system supports different roles:

Learners
Admins
Content creators

It is designed to be simple, scalable, and easy to maintain.

Tech Stack

Frontend:

React.js
Tailwind CSS

Backend:

Node.js
Express.js

Databases:

PostgreSQL (SQL) → user data and authentication
MongoDB (NoSQL) → courses, lessons, and progress

Authentication:

JWT (JSON Web Tokens)

Containerization:

Docker + Docker Compose
Setup Instructions (Docker)
Requirements
Docker
Docker Compose
1. Clone the project
git clone https://github.com/LMS-prototype
cd workerconnect-lms
2. Run the application
docker-compose up --build
3. Access the app
Frontend → http://localhost:3000
Backend → http://localhost:5000
4. Stop the app
docker-compose down
Environment Variables

Environment variables are already defined in docker-compose.yml.

Main variables used:

JWT_SECRET → for authentication
PG_USER, PG_PASS, PG_DB → PostgreSQL config
MONGO_URI → MongoDB connection
API Documentation

All API endpoints are tested using Postman.

Postman Collection:
(Add your link here)

Example Endpoints
POST /auth/login → login user
POST /auth/register → register user
GET /courses → get all courses
POST /lessons → add lesson (admin only)
POST /lessons/complete → mark lesson as completed
Database Design Choices
PostgreSQL (SQL) – Users

Used for:

User accounts
Authentication
Roles and permissions

Why SQL?

Structured data
Strong relationships
High data integrity (safe for sensitive data)
MongoDB (NoSQL) – Content & Progress

Used for:

Courses
Lessons
Learner progress

Why NoSQL?

Flexible structure
Easy to store nested data
Faster changes without complex migrations
Trade-off

Using two databases:

Improves flexibility and scalability
 Adds complexity in managing data across systems
Microservices Architecture (Future Improvement)

The system can be split into smaller services:

Auth Service → handles login, registration, JWT
Course Service → manages courses and lessons
Progress Service → tracks user progress
Notification Service → sends updates
Advantages
Easier to scale each service
Better organization
Easier maintenance
Trade-offs
More complex system
Services must communicate with each other
Reflections & Design Decisions
React improves performance and user experience
Node.js + Express provide fast and simple APIs
SQL for users ensures security and consistency
NoSQL for content allows flexibility as courses grow
JWT keeps authentication simple and secure
Docker makes setup easy and consistent
Trade-offs
Using two databases increases complexity
Microservices improve scaling but add overhead
Docker adds setup complexity but simplifies deployment
