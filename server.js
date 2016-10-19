/**
 * Launches tackleclutter.com
 */
const express = require('express');
const path = require('path');
const compression = require('compression');
const nodemailer = require('nodemailer');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./config.properties');
const smptPassword = properties.get('mail.smtp.password');

const bodyParser = require('body-parser');

function sendMail(name, email, phone, message) {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
            user: 'webmaster@mail.tackleclutter.com',
            pass: smptPassword
        }
    });

    var mailOptions = {
        to: 'juliana@tackleclutter.com',
        subject: 'Message from tackleclutter.com',
        text: `You have received a message from tackleclutter.com
           Name: ${name}
           Email: ${email}
           Phone Number: ${phone}

           Message:

           ${message}
        `
    };
    return transporter.sendMail(mailOptions);
}


var app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.post('/sendmail', function(req, res) {
    //TODO: using req.param is deprecated
    var param = (name) => req.body[name];

    sendMail(param('name'), param('email'), param('phone'), param('message')).then(function(msg) {
        res.send(JSON.stringify({msg: 'Email sent: ' + msg}));
    }, function(error) {
        res.send(JSON.stringify({msg: 'An error occurred sending email: ' + error}));
    });
});

// Serve our static stuff like index.css
app.use(express.static(__dirname));


// Send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
});