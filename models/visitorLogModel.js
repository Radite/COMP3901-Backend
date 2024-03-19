const mongoose = require('mongoose');

const visitorLogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  visitor_count: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const VisitorLog = mongoose.model('VisitorLog', visitorLogSchema);

module.exports = VisitorLog;
