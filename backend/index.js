const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');

const port = process.env.PORT || 8080;

const app = new express();
app.use(cors(
    {
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/form', require('./routes/form.route'));

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.timeout = 1000 * 60 * 10;
server.keepAliveTimeout = 1000 * 60 * 10;
