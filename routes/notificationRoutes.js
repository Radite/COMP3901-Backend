const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/NotificationController');

// Route to get all notifications
router.get('/', NotificationController.getAllNotifications);

// Route to get a specific notification by ID
router.get('/:id', NotificationController.getNotificationById);

// Route to create a new notification
router.post('/', NotificationController.createNotification);

// Route to update a notification by ID
router.put('/:id', NotificationController.updateNotificationById);

// Route to delete a notification by ID
router.delete('/:id', NotificationController.deleteNotificationById);

module.exports = router;
