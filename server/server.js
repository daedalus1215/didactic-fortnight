require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header('Access-Control-Allow-Methods', '*');

    next();
});

require('./src/application/utils/routes')(app);

async function startServer() {
    app.listen('3009', err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is ready !`);
    });
}

// Run the async function to start our server
startServer();