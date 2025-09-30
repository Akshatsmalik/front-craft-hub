const express = require('express');
const Content = require('../models/Content');
const router = express.Router();

// Get all content items
router.get('/', async (req, res) => {
  try {
    const { status, type } = req.query;
    
    let query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (type && type !== 'all') {
      query.type = type;
    }

    const content = await Content.find(query).sort({ createdAt: -1 });
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get content item by ID
router.get('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ error: 'Content item not found' });
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new content item
router.post('/', async (req, res) => {
  try {
    const { title, type, status } = req.body;
    
    if (!title || !type) {
      return res.status(400).json({ error: 'Title and type are required' });
    }

    const content = new Content({
      title,
      type,
      status: status || 'draft'
    });

    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update content item
router.put('/:id', async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!content) {
      return res.status(404).json({ error: 'Content item not found' });
    }
    
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete content item
router.delete('/:id', async (req, res) => {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ error: 'Content item not found' });
    }
    res.json({ message: 'Content item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;