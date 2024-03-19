const express = require('express');
const router = express.Router();
const VisitorController = require('../controllers/visitorLogController');

// Route to get all visitor logs
router.get('/', VisitorController.getAllVisitorLogs);

// Route to get a specific visitor log by ID
router.get('/:id', VisitorController.getVisitorLogById);

// Route to create a new visitor log
router.post('/', VisitorController.createVisitorLog);

// Route to update a visitor log by ID
router.put('/:id', VisitorController.updateVisitorLog);

// Route to delete a visitor log by ID
router.delete('/:id', VisitorController.deleteVisitorLog);

module.exports = router;
