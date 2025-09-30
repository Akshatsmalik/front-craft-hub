const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'counselor', 'admin'],
    default: 'student'
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  },
  avatar: {
    type: String,
    default: function() {
      return this.name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);