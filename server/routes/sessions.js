const express = require('express');
const { sessions } = require('../data/mockData');
const router = express.Router();

// Get all sessions
router.get('/', (req, res) => {
  const { status, date } = req.query;
  
  let filteredSessions = [...sessions];

  if (status && status !== 'all') {
    filteredSessions = filteredSessions.filter(session => session.status === status);
  }

  if (date) {
    filteredSessions = filteredSessions.filter(session => session.date === date);
  }

  res.json(filteredSessions);
});

// Get session by ID
router.get('/:id', (req, res) => {
  const session = sessions.find(s => s.id === req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  res.json(session);
});

// Create new session
router.post('/', (req, res) => {
  const { studentName, counselorName, date, status } = req.body;
  
  if (!studentName || !counselorName || !date) {
    return res.status(400).json({ error: 'Student name, counselor name, and date are required' });
  }

  const newSession = {
    id: `S${String(sessions.length + 1).padStart(3, '0')}`,
    sessionId: `S${String(sessions.length + 1).padStart(3, '0')}`,
    studentName,
    counselorName,
    date,
    status: status || 'scheduled',
    feedback: 'N/A'
  };

  sessions.push(newSession);
  res.status(201).json(newSession);
});

// Update session
router.put('/:id', (req, res) => {
  const sessionIndex = sessions.findIndex(s => s.id === req.params.id);
  if (sessionIndex === -1) {
    return res.status(404).json({ error: 'Session not found' });
  }

  sessions[sessionIndex] = { ...sessions[sessionIndex], ...req.body };
  res.json(sessions[sessionIndex]);
});

// Delete session
router.delete('/:id', (req, res) => {
  const sessionIndex = sessions.findIndex(s => s.id === req.params.id);
  if (sessionIndex === -1) {
    return res.status(404).json({ error: 'Session not found' });
  }

  sessions.splice(sessionIndex, 1);
  res.json({ message: 'Session deleted successfully' });
});

module.exports = router;