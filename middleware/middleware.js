// Middleware function for logging request details
exports.logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call next middleware in the chain
};

// Middleware function for handling errors
exports.handleError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
};

// Middleware function for authentication (example)
exports.authenticateUser = (req, res, next) => {
  // Check if user is authenticated
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to next middleware
  } else {
    return res.status(401).json({ message: 'Unauthorized' }); // User is not authenticated, send 401 Unauthorized response
  }
};
