const express = require('express');
const { contentItems } = require('../data/mockData');
const router = express.Router();

// Get all content items
router.get('/', (req, res) => {
  const { status, type } = req.query;
  
  let filteredContent = [...contentItems];

  if (status && status !== 'all') {
    filteredContent = filteredContent.filter(item => item.status === status);
  }

  if (type && type !== 'all') {
    filteredContent = filteredContent.filter(item => item.type === type);
  }

  res.json(filteredContent);
});

// Get content item by ID
router.get('/:id', (req, res) => {
  const item = contentItems.find(c => c.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Content item not found' });
  }
  res.json(item);
});

// Create new content item
router.post('/', (req, res) => {
  const { title, type, status } = req.body;
  
  if (!title || !type) {
    return res.status(400).json({ error: 'Title and type are required' });
  }

  const newItem = {
    id: require('uuid').v4(),
    title,
    type,
    status: status || 'draft',
    createdAt: new Date()
  };

  contentItems.push(newItem);
  res.status(201).json(newItem);
});

// Update content item
router.put('/:id', (req, res) => {
  const itemIndex = contentItems.findIndex(c => c.id === req.params.id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Content item not found' });
  }

  contentItems[itemIndex] = { ...contentItems[itemIndex], ...req.body };
  res.json(contentItems[itemIndex]);
});

// Delete content item
router.delete('/:id', (req, res) => {
  const itemIndex = contentItems.findIndex(c => c.id === req.params.id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Content item not found' });
  }

  contentItems.splice(itemIndex, 1);
  res.json({ message: 'Content item deleted successfully' });
});

module.exports = router;