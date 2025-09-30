const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['PDF Document', 'Video Series', 'Article', 'Webinar']
  },
  status: {
    type: String,
    required: true,
    enum: ['published', 'draft', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Content', contentSchema);