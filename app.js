const express = require('express');
const mongoose = require('mongoose');
const middleware = require('./middleware/middleware');
const userRoutes = require('./routes/userRoutes');
const checkinRoutes = require('./routes/checkinRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const visitorLogRoutes = require('./routes/visitorLogRoutes');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/GymManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Enable CORS for all routes
app.use(cors());

// Apply middleware
app.use(express.json()); // Parse JSON request bodies
app.use(middleware.logRequest); // Log request details
app.use('/api/users', userRoutes); // Apply user routes
app.use('/api/checkins', checkinRoutes); // Apply checkin routes
app.use('/api/notifications', notificationRoutes); // Apply notification routes
app.use('/api/visitorlogs', visitorLogRoutes); // Apply visitor log routes
app.use(middleware.handleError); // Error handling middleware

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
