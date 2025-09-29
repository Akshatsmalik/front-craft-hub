const express = require('express');
const router = express.Router();

// Get financial stats
router.get('/stats', (req, res) => {
  const stats = {
    totalRevenue: 125430,
    commissionEarned: 45678,
    pendingPayments: 8240,
    monthlyGrowth: 22
  };
  
  res.json(stats);
});

// Get revenue data
router.get('/revenue', (req, res) => {
  const revenueData = [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 92000 },
    { month: 'Mar', revenue: 78000 },
    { month: 'Apr', revenue: 105000 },
    { month: 'May', revenue: 118000 },
    { month: 'Jun', revenue: 125430 }
  ];
  
  res.json(revenueData);
});

// Get commission data
router.get('/commissions', (req, res) => {
  const commissionData = [
    { college: 'Metropolitan University', amount: 12500, status: 'paid' },
    { college: 'Creative Arts Institute', amount: 8900, status: 'pending' },
    { college: 'Global Management School', amount: 15600, status: 'paid' }
  ];
  
  res.json(commissionData);
});

module.exports = router;