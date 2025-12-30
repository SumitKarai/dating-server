const User = require('../models/User');

// @desc    Get nearby users
// @route   GET /api/nearby-users
// @access  Public (for now, can be protected)
const getNearbyUsers = async (req, res) => {
  const { latitude, longitude, userId } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and Longitude are required' });
  }

  try {
    const users = await User.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: 10000 // 10km in meters
        }
      },
      _id: { $ne: userId } // Exclude self if userId is provided
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getNearbyUsers };
