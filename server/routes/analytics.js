const express = require('express');
const router = express.Router();

// Get dashboard stats
router.get('/stats', (req, res) => {
  const stats = {
    totalStudents: 12345,
    totalCounselors: 250,
    sessionsToday: 128,
    commissionEarned: 45678
  };
  
  res.json(stats);
});

// Get weekly sessions data
router.get('/weekly-sessions', (req, res) => {
  const weeklyData = [
    { day: "Mon", sessions: 42 },
    { day: "Tue", sessions: 52 },
    { day: "Wed", sessions: 65 },
    { day: "Thu", sessions: 58 },
    { day: "Fri", sessions: 78 },
    { day: "Sat", sessions: 82 },
    { day: "Sun", sessions: 62 }
  ];
  
  res.json(weeklyData);
});

// Get registration data
router.get('/registrations', (req, res) => {
  const registrationData = [
    { month: "Jan", registrations: 145 },
    { month: "Feb", registrations: 180 },
    { month: "Mar", registrations: 210 },
    { month: "Apr", registrations: 195 },
    { month: "May", registrations: 245 },
    { month: "Jun", registrations: 280 }
  ];
  
  res.json(registrationData);
});

// Get student interest data
router.get('/student-interests', (req, res) => {
  const interestData = [
    { name: "STEM", value: 35, color: "#a855f7" },
    { name: "Arts & Humanities", value: 25, color: "#ec4899" },
    { name: "Business & Economics", value: 20, color: "#eab308" },
    { name: "Healthcare", value: 20, color: "#10b981" }
  ];
  
  res.json(interestData);
});

module.exports = router;