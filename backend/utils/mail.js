const { createTransport } = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const handlebarsOptions = {
    viewEngine: {
        partialsDir: path.resolve('./templates/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./templates/')
}


const sendMail = async (userEmail, subject, template, context) => {
    transporter.use('compile', hbs(handlebarsOptions))

    const mailOptions = {
        from: userEmail,
        to: process.env.EMAIL,
        subject: subject,
        template,
        context
    }
    const info = await transporter.sendMail(mailOptions);
    console.log(info)
}

module.exports = {
    sendMail
}