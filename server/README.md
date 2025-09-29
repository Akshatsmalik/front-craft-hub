# ALUMNA.AI Backend API

A simple Node.js backend for the ALUMNA.AI Admin Dashboard.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file with your configuration:
```
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

3. Start the server:
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/verify` - Verify JWT token

### Users
- `GET /api/users` - Get all users (with filtering)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Sessions
- `GET /api/sessions` - Get all sessions (with filtering)
- `GET /api/sessions/:id` - Get session by ID
- `POST /api/sessions` - Create new session
- `PUT /api/sessions/:id` - Update session
- `DELETE /api/sessions/:id` - Delete session

### Colleges
- `GET /api/colleges` - Get all colleges (with filtering)
- `GET /api/colleges/:id` - Get college by ID
- `POST /api/colleges` - Create new college
- `PUT /api/colleges/:id` - Update college
- `DELETE /api/colleges/:id` - Delete college

### Finance
- `GET /api/finance/stats` - Get financial statistics
- `GET /api/finance/revenue` - Get revenue data
- `GET /api/finance/commissions` - Get commission data

### Content
- `GET /api/content` - Get all content items (with filtering)
- `GET /api/content/:id` - Get content item by ID
- `POST /api/content` - Create new content item
- `PUT /api/content/:id` - Update content item
- `DELETE /api/content/:id` - Delete content item

### Support
- `GET /api/support/tickets` - Get all support tickets (with filtering)
- `GET /api/support/stats` - Get support statistics
- `POST /api/support/tickets` - Create new support ticket
- `PUT /api/support/tickets/:id` - Update support ticket

### Analytics
- `GET /api/analytics/stats` - Get dashboard statistics
- `GET /api/analytics/weekly-sessions` - Get weekly sessions data
- `GET /api/analytics/registrations` - Get registration data
- `GET /api/analytics/student-interests` - Get student interest data

### Audit
- `GET /api/audit/logs` - Get audit logs (with filtering)
- `POST /api/audit/logs` - Create new audit log entry

## Default Login Credentials

- Email: `admin@dashboard.com`
- Password: `password`

## Features

- JWT-based authentication
- CORS enabled for frontend integration
- Mock data for development
- Error handling middleware
- Input validation
- RESTful API design

## Notes

- This is a development backend using in-memory data storage
- For production, replace mock data with a real database
- Update JWT_SECRET in production
- Add rate limiting and additional security measures for production use