const express = require('express');
const AuditLog = require('../models/AuditLog');
const router = express.Router();

// Get all audit logs
router.get('/logs', async (req, res) => {
  try {
    const { user, action, startDate, endDate } = req.query;
    
    let query = {};

    if (user && user !== 'all') {
      query.user = { $regex: user, $options: 'i' };
    }

    if (action && action !== 'all') {
      query.action = { $regex: action, $options: 'i' };
    }

    if (startDate) {
      query.timestamp = { $gte: new Date(startDate) };
    }

    if (endDate) {
      if (query.timestamp) {
        query.timestamp.$lte = new Date(endDate);
      } else {
        query.timestamp = { $lte: new Date(endDate) };
      }
    }

    const logs = await AuditLog.find(query).sort({ timestamp: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new audit log entry
router.post('/logs', async (req, res) => {
  try {
    const { user, action, ipAddress } = req.body;
    
    if (!user || !action) {
      return res.status(400).json({ error: 'User and action are required' });
    }

    const log = new AuditLog({
      user,
      action,
      ipAddress: ipAddress || 'Unknown'
    });

    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;