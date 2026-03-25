 LMS Project
Project Overview

WorkerConnect LMS is a web-based learning management system designed to provide courses, track learner progress, and manage users efficiently. The platform supports multiple roles including learners, admins, and content creators. The application emphasizes flexibility, scalability, and clear separation of concerns in both backend and frontend components.

Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Databases:
PostgreSQL (SQL): Used for user authentication and roles management
MongoDB (NoSQL): Used for course content, lessons, and learner progress
Authentication: JWT-based system for secure role-based access
API Testing: Postman for endpoints verification
Setup Instructions
Clone the repository
git clone https://github.com/LMS-prototype
cd workerconnect-lms
Install dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Environment Variables
Create a .env file in the backend folder with the following variables:
PORT=5000
JWT_SECRET=your_jwt_secret
PG_USER=postgres
PG_PASS=your_postgres_password
PG_DB=lms
PG_HOST=localhost
PG_PORT=5432
MONGO_URI=mongodb://localhost:27017/lms
Run the application
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm start
API Documentation

All backend endpoints are tested and documented in Postman. You can import the collection here:
Postman Collection Link

Example Endpoints:

POST /auth/login – Authenticate a user
POST /auth/register – Register a new learner/admin
GET /courses – Retrieve all courses
POST /lessons – Add a lesson (admin only)
POST /lessons/complete – Mark a lesson as completed
Database Design Choices

SQL for Users (PostgreSQL):

Structured, relational data for authentication, roles, and permissions
Ensures ACID compliance and strong data integrity for critical user data

NoSQL for Content/Progress (MongoDB):

Flexible document model for courses, lessons, and progress tracking
Easier to store nested data like modules, lesson content, and completion status
Supports dynamic updates without complex migrations

Design Trade-off:

Using two databases introduces complexity in transactions across systems, but it improves scalability and flexibility.
Microservices Considerations

The system could be split into the following microservices:

Auth Service: Handles user registration, login, JWT issuance, and role management
Course Service: Manages course creation, lessons, and updates
Progress Service: Tracks learner progress and completion
Notification Service: Sends updates or reminders to learners

Advantages:

Independent scaling per service
Easier maintenance and updates
Clear separation of concerns

Trade-offs:

Increased system complexity
Requires inter-service communication (e.g., via REST or message queues)
Reflections and Design Decisions
Frontend: React with lazy-loading improves performance for large course content
Backend: Node.js and Express provide lightweight, fast API responses
Database Split: SQL ensures secure, consistent user data, while NoSQL provides flexibility for evolving course content
JWT Authentication: Balances security with simplicity for role-based access
Trade-offs: Two databases and potential microservices increase deployment complexity but future-proof scalability and maintainability

Overall, the design prioritizes scalability, flexibility, and role-based access control, while keeping the system modular and maintainable.
