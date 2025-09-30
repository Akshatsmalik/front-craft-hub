const express = require('express');
const SupportTicket = require('../models/SupportTicket');
const router = express.Router();

// Get all support tickets
router.get('/tickets', async (req, res) => {
  try {
    const { status, search } = req.query;
    
    let query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { userName: { $regex: search, $options: 'i' } },
        { issue: { $regex: search, $options: 'i' } },
        { ticketId: { $regex: search, $options: 'i' } }
      ];
    }

    const tickets = await SupportTicket.find(query).sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get support stats
router.get('/stats', async (req, res) => {
  try {
    const totalTickets = await SupportTicket.countDocuments();
    const openTickets = await SupportTicket.countDocuments({ status: 'open' });
    
    const stats = {
      totalTickets,
      openTickets,
      newFeedback: 15 // This could be calculated from a feedback collection
    };
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new support ticket
router.post('/tickets', async (req, res) => {
  try {
    const { userName, issue, status } = req.body;
    
    if (!userName || !issue) {
      return res.status(400).json({ error: 'User name and issue are required' });
    }

    // Generate ticket ID
    const ticketCount = await SupportTicket.countDocuments();
    const ticketId = `TK${String(ticketCount + 1).padStart(3, '0')}`;

    const ticket = new SupportTicket({
      ticketId,
      userName,
      issue,
      status: status || 'open'
    });

    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update support ticket
router.put('/tickets/:id', async (req, res) => {
  try {
    const ticket = await SupportTicket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!ticket) {
      return res.status(404).json({ error: 'Support ticket not found' });
    }
    
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;