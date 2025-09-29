const express = require('express');
const { supportTickets } = require('../data/mockData');
const router = express.Router();

// Get all support tickets
router.get('/tickets', (req, res) => {
  const { status, search } = req.query;
  
  let filteredTickets = [...supportTickets];

  if (status && status !== 'all') {
    filteredTickets = filteredTickets.filter(ticket => ticket.status === status);
  }

  if (search) {
    filteredTickets = filteredTickets.filter(ticket => 
      ticket.userName.toLowerCase().includes(search.toLowerCase()) ||
      ticket.issue.toLowerCase().includes(search.toLowerCase()) ||
      ticket.id.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(filteredTickets);
});

// Get support stats
router.get('/stats', (req, res) => {
  const stats = {
    totalTickets: supportTickets.length,
    openTickets: supportTickets.filter(t => t.status === 'open').length,
    newFeedback: 15
  };
  
  res.json(stats);
});

// Create new support ticket
router.post('/tickets', (req, res) => {
  const { userName, issue, status } = req.body;
  
  if (!userName || !issue) {
    return res.status(400).json({ error: 'User name and issue are required' });
  }

  const newTicket = {
    id: `TK${String(supportTickets.length + 1).padStart(3, '0')}`,
    userName,
    issue,
    status: status || 'open',
    createdAt: new Date()
  };

  supportTickets.push(newTicket);
  res.status(201).json(newTicket);
});

// Update support ticket
router.put('/tickets/:id', (req, res) => {
  const ticketIndex = supportTickets.findIndex(t => t.id === req.params.id);
  if (ticketIndex === -1) {
    return res.status(404).json({ error: 'Support ticket not found' });
  }

  supportTickets[ticketIndex] = { ...supportTickets[ticketIndex], ...req.body };
  res.json(supportTickets[ticketIndex]);
});

module.exports = router;