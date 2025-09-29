const express = require('express');
const { colleges } = require('../data/mockData');
const router = express.Router();

// Get all colleges
router.get('/', (req, res) => {
  const { status, search } = req.query;
  
  let filteredColleges = [...colleges];

  if (status && status !== 'all') {
    filteredColleges = filteredColleges.filter(college => college.status === status);
  }

  if (search) {
    filteredColleges = filteredColleges.filter(college => 
      college.name.toLowerCase().includes(search.toLowerCase()) ||
      college.registrationLink.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(filteredColleges);
});

// Get college by ID
router.get('/:id', (req, res) => {
  const college = colleges.find(c => c.id === req.params.id);
  if (!college) {
    return res.status(404).json({ error: 'College not found' });
  }
  res.json(college);
});

// Create new college
router.post('/', (req, res) => {
  const { name, registrationLink, commission, status } = req.body;
  
  if (!name || !registrationLink || !commission) {
    return res.status(400).json({ error: 'Name, registration link, and commission are required' });
  }

  const newCollege = {
    id: require('uuid').v4(),
    name,
    registrationLink,
    commission,
    status: status || 'pending'
  };

  colleges.push(newCollege);
  res.status(201).json(newCollege);
});

// Update college
router.put('/:id', (req, res) => {
  const collegeIndex = colleges.findIndex(c => c.id === req.params.id);
  if (collegeIndex === -1) {
    return res.status(404).json({ error: 'College not found' });
  }

  colleges[collegeIndex] = { ...colleges[collegeIndex], ...req.body };
  res.json(colleges[collegeIndex]);
});

// Delete college
router.delete('/:id', (req, res) => {
  const collegeIndex = colleges.findIndex(c => c.id === req.params.id);
  if (collegeIndex === -1) {
    return res.status(404).json({ error: 'College not found' });
  }

  colleges.splice(collegeIndex, 1);
  res.json({ message: 'College deleted successfully' });
});

module.exports = router;