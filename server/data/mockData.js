const { v4: uuidv4 } = require('uuid');

// Mock data for development
const users = [
  {
    id: uuidv4(),
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "student",
    status: "active",
    avatar: "AJ",
    createdAt: new Date('2024-01-15')
  },
  {
    id: uuidv4(),
    name: "Dr. Ben Carter",
    email: "ben.c@counselor.org",
    role: "counselor",
    status: "active",
    avatar: "BC",
    createdAt: new Date('2024-02-10')
  },
  {
    id: uuidv4(),
    name: "Clara Diaz",
    email: "clara.d@example.com",
    role: "student",
    status: "pending",
    avatar: "CD",
    createdAt: new Date('2024-03-05')
  }
];

const sessions = [
  {
    id: "S001",
    sessionId: "S001",
    studentName: "Alice Johnson",
    counselorName: "Dr. Elena Petrova",
    date: "2024-07-20",
    status: "scheduled",
    feedback: "N/A"
  },
  {
    id: "S002",
    sessionId: "S002",
    studentName: "Bob The Builder",
    counselorName: "Dr. Mark Johnson",
    date: "2024-07-18",
    status: "completed",
    feedback: "Excellent advice on career paths."
  }
];

const colleges = [
  {
    id: uuidv4(),
    name: "Metropolitan University",
    registrationLink: "metrouni.edu",
    commission: "10%",
    status: "active"
  },
  {
    id: uuidv4(),
    name: "Creative Arts Institute",
    registrationLink: "cai.edu",
    commission: "12%",
    status: "pending"
  }
];

const supportTickets = [
  {
    id: "TK001",
    userName: "Alice Johnson",
    issue: "Login issue on student portal",
    status: "open",
    createdAt: new Date('2024-07-15')
  },
  {
    id: "TK002",
    userName: "Bob Smith",
    issue: "Cannot access course materials",
    status: "in progress",
    createdAt: new Date('2024-07-16')
  }
];

const contentItems = [
  {
    id: uuidv4(),
    title: "Effective Study Techniques for STEM",
    type: "PDF Document",
    status: "published",
    createdAt: new Date('2024-06-01')
  },
  {
    id: uuidv4(),
    title: "Choosing Your Major: A Comprehensive Guide",
    type: "Video Series",
    status: "draft",
    createdAt: new Date('2024-06-15')
  }
];

const auditLogs = [
  {
    id: uuidv4(),
    user: "admin@dashboard.com",
    action: "Logged in",
    timestamp: new Date('2024-07-20T10:30:15'),
    ipAddress: "192.168.1.10"
  },
  {
    id: uuidv4(),
    user: "student@example.com",
    action: "Updated profile information",
    timestamp: new Date('2024-07-20T10:35:02'),
    ipAddress: "10.0.0.5"
  }
];

module.exports = {
  users,
  sessions,
  colleges,
  supportTickets,
  contentItems,
  auditLogs
};