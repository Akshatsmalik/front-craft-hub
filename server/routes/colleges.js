const express = require('express');
const College = require('../models/College');
const router = express.Router();

// Get all colleges
router.get('/', async (req, res) => {
  try {
    const { status, search } = req.query;
    
    let query = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { registrationLink: { $regex: search, $options: 'i' } }
      ];
    }

    const colleges = await College.find(query).sort({ createdAt: -1 });
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get college by ID
router.get('/:id', async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) {
      return res.status(404).json({ error: 'College not found' });
    }
    res.json(college);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new college
router.post('/', async (req, res) => {
  try {
    const { name, registrationLink, commission, status } = req.body;
    
    if (!name || !registrationLink || !commission) {
      return res.status(400).json({ error: 'Name, registration link, and commission are required' });
    }

    const college = new College({
      name,
      registrationLink,
      commission,
      status: status || 'pending'
    });

    await college.save();
    res.status(201).json(college);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update college
router.put('/:id', async (req, res) => {
  try {
    const college = await College.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!college) {
      return res.status(404).json({ error: 'College not found' });
    }
    
    res.json(college);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete college
router.delete('/:id', async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    if (!college) {
      return res.status(404).json({ error: 'College not found' });
    }
    res.json({ message: 'College deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;