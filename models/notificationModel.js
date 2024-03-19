const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  notification_type: {
    type: String,
    required: true
  },
  notification_time: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
