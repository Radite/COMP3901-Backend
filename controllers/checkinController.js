const Checkin = require('../models/checkinModel');

// Controller methods for handling check-in/check-out-related operations

// Get all check-ins
exports.getAllCheckins = async (req, res) => {
    try {
        const checkins = await Checkin.find();
        res.json(checkins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single check-in by ID
exports.getCheckinById = async (req, res) => {
    try {
        const checkin = await Checkin.findById(req.params.id);
        if (checkin) {
            res.json(checkin);
        } else {
            res.status(404).json({ message: 'Check-in not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new check-in
exports.createCheckin = async (req, res) => {
    const checkin = new Checkin({
      user_id: req.body.user_id,
      checkin_time: req.body.checkin_time,
      checkout_time: req.body.checkout_time, 
      expiration_time: req.body.expiration_time 
    });
    try {
      const newCheckin = await checkin.save();
      res.status(201).json(newCheckin);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
// Update a check-in by ID
exports.updateCheckin = async (req, res) => {
    try {
        const checkin = await Checkin.findById(req.params.id);
        if (checkin) {
            // Update check-in properties if needed
            // For example: checkin.checkout_time = req.body.checkout_time;
            const updatedCheckin = await checkin.save();
            res.json(updatedCheckin);
        } else {
            res.status(404).json({ message: 'Check-in not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a check-in by ID
exports.deleteCheckin = async (req, res) => {
    try {
        const checkin = await Checkin.findById(req.params.id);
        if (checkin) {
            await checkin.deleteOne();
            res.json({ message: 'Checkin deleted successfully' });
        } else {
            res.status(404).json({ message: 'Check-in not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to get the count of check-ins
exports.getCheckinCount = async (req, res) => {
    try {
      const count = await Checkin.countDocuments();
      res.json({ count });
    } catch (error) {
      console.error('Error fetching check-in count:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.getUpcomingCheckouts = async (req, res) => {
    try {
      const currentTime = new Date();
      const upcomingCheckouts = await Checkin.find({ expiration_time: { $gt: currentTime } })
        .populate('user_id', 'name idNumber') // Populate user information
        .exec();
  
      res.json(upcomingCheckouts);
    } catch (error) {
      console.error('Error fetching upcoming checkouts:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };