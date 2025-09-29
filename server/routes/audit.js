const express = require('express');
const { auditLogs } = require('../data/mockData');
const router = express.Router();

// Get all audit logs
router.get('/logs', (req, res) => {
  const { user, action, startDate, endDate } = req.query;
  
  let filteredLogs = [...auditLogs];

  if (user && user !== 'all') {
    filteredLogs = filteredLogs.filter(log => 
      log.user.toLowerCase().includes(user.toLowerCase())
    );
  }

  if (action && action !== 'all') {
    filteredLogs = filteredLogs.filter(log => 
      log.action.toLowerCase().includes(action.toLowerCase())
    );
  }

  if (startDate) {
    filteredLogs = filteredLogs.filter(log => 
      new Date(log.timestamp) >= new Date(startDate)
    );
  }

  if (endDate) {
    filteredLogs = filteredLogs.filter(log => 
      new Date(log.timestamp) <= new Date(endDate)
    );
  }

  // Sort by timestamp (newest first)
  filteredLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  res.json(filteredLogs);
});

// Create new audit log entry
router.post('/logs', (req, res) => {
  const { user, action, ipAddress } = req.body;
  
  if (!user || !action) {
    return res.status(400).json({ error: 'User and action are required' });
  }

  const newLog = {
    id: require('uuid').v4(),
    user,
    action,
    timestamp: new Date(),
    ipAddress: ipAddress || 'Unknown'
  };

  auditLogs.push(newLog);
  res.status(201).json(newLog);
});

module.exports = router;