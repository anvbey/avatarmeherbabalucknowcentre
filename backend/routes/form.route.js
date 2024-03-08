const router = require('express').Router();
const controller = require('../controllers/forms/form.route');

router.post('/contact', controller.contactForm);
router.post('/registration', controller.registrationForm);

module.exports = router;