const express = require('express');
const { users } = require('../data/mockData');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  const { role, status, search } = req.query;
  
  let filteredUsers = [...users];

  if (role && role !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.role === role);
  }

  if (status && status !== 'all') {
    filteredUsers = filteredUsers.filter(user => user.status === status);
  }

  if (search) {
    filteredUsers = filteredUsers.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(filteredUsers);
});

// Get user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// Create new user
router.post('/', (req, res) => {
  const { name, email, role, status } = req.body;
  
  if (!name || !email || !role) {
    return res.status(400).json({ error: 'Name, email, and role are required' });
  }

  const newUser = {
    id: require('uuid').v4(),
    name,
    email,
    role,
    status: status || 'pending',
    avatar: name.split(' ').map(n => n[0]).join('').toUpperCase(),
    createdAt: new Date()
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
router.put('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(users[userIndex]);
});

// Delete user
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;