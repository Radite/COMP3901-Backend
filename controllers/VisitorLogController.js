const VisitorLog = require('../models/visitorLogModel');

// Controller functions
exports.getAllVisitorLogs = async (req, res) => {
  try {
    const visitorLogs = await VisitorLog.find();
    res.json(visitorLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getVisitorLogById = async (req, res) => {
  try {
    const visitorLog = await VisitorLog.findById(req.params.id);
    if (!visitorLog) {
      return res.status(404).json({ message: 'Visitor log not found' });
    }
    res.json(visitorLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createVisitorLog = async (req, res) => {
  try {
    const visitorLog = new VisitorLog(req.body);
    await visitorLog.save();
    res.status(201).json(visitorLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateVisitorLog = async (req, res) => {
  try {
    const updatedVisitorLog = await VisitorLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVisitorLog) {
      return res.status(404).json({ message: 'Visitor log not found' });
    }
    res.json(updatedVisitorLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteVisitorLog = async (req, res) => {
  try {
    const deletedVisitorLog = await VisitorLog.findByIdAndDelete(req.params.id);
    if (!deletedVisitorLog) {
      return res.status(404).json({ message: 'Visitor log not found' });
    }
    res.json({ message: 'Visitor log deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
