const router = require('express').Router();
const { jwtValidator } = require('../middleware/passport');
const { getStatus, handleUserLogin, handleUserSignup } = require('../controllers/authController');

router.get('/me', jwtValidator, getStatus);
router.post('/login', handleUserLogin);
router.post('/signup', handleUserSignup);

module.exports = router;
