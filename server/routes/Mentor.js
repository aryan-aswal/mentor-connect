const router = require('express').Router();
const { fetchMentorDetails, fetchAllMentors } = require('../controllers/Mentor');

router.get('/fetch-mentor-details', fetchMentorDetails);
router.get('/fetch-all-mentors', fetchAllMentors);

module.exports = router;