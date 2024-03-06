const router = require('express').Router();
const controller = require('../controllers/contactForm.controller');

router.post('/contact', controller.contactForm);

module.exports = router;