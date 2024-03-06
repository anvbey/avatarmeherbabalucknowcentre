var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
require('dotenv').config();

const app = new express();
app.use(cors(
    {
        origin: [
            'http://localhost:3000',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/form', require('./routes/contactForm.route'));

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.timeout = 1000 * 60 * 10;
server.keepAliveTimeout = 1000 * 60 * 10;
server.requestTimeout = 1000 * 60 * 10;
