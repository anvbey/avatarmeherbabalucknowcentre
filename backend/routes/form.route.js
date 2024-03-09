const router = require('express').Router();
const controller = require('../controllers/form.controller');

router.post('/contact', controller.contactForm);
router.post('/registration', controller.registrationForm);

module.exports = router;