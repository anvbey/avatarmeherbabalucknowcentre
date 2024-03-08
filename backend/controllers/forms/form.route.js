const contactForm = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
}

const registrationForm = async (req, res) => {

}

module.exports = {
    contactForm,
    registrationForm
};