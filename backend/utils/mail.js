const { createTransport } = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { resolve } = require('path');

const transporter = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const handlebarsOptions = {
    viewEngine: {
        partialsDir: resolve('./templates/'),
        defaultLayout: false,
    },
    viewPath: resolve('./templates/')
}

const sendMail = async (template, context) => {
    transporter.use('compile', hbs(handlebarsOptions))

    const mailOptions = {
        from: process.env.DOMAIN_EMAIL,
        to: process.env.EMAIL,
        subject: 'Someone contacted you from the website',
        template,
        context
    }
    const info = await transporter.sendMail(mailOptions);
    console.log(info)
}

module.exports = {
    sendMail
}