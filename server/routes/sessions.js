const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

// Get all sessions
router.get('/', async (req, res) => {
  try {
    const { status, date } = req.query;
    
    let query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      
      query.date = {
        $gte: startDate,
        $lt: endDate
      };
    }

    const sessions = await Session.find(query).sort({ date: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get session by ID
router.get('/:id', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new session
router.post('/', async (req, res) => {
  try {
    const { studentName, counselorName, date, status } = req.body;
    
    if (!studentName || !counselorName || !date) {
      return res.status(400).json({ error: 'Student name, counselor name, and date are required' });
    }

    // Generate session ID
    const sessionCount = await Session.countDocuments();
    const sessionId = `S${String(sessionCount + 1).padStart(3, '0')}`;

    const session = new Session({
      sessionId,
      studentName,
      counselorName,
      date: new Date(date),
      status: status || 'scheduled',
      feedback: 'N/A'
    });

    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update session
router.put('/:id', async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete session
router.delete('/:id', async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.json({ message: 'Session deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;