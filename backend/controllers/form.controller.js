const { sendMail } = require('../utils/mail');

const contactForm = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        await sendMail('contactForm', { name, phone, message, date: new Date(), email, subject});
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const registrationForm = async (req, res) => {
    const { firstName, lastName, email, phone, city, age, gender, numberOfMembers, members } = req.body;
}

module.exports = {
    contactForm,
    registrationForm
};