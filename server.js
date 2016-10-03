/**
 * Launches tackleclutter.com
 */

var express = require('express');
var path = require('path');
var compression = require('compression');
var nodemailer = require('nodemailer');


function sendMail(name, email, phone, message) {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
            user: 'postmaster@mail.tackleclutter.com',
            pass: '5b4fc433e86836d60c49016b9d4b0e5b'
        }
    });

    var mailOptions = {
        to: 'juliana@tackleclutter.com', // list of receivers
        subject: 'Message from tackleclutter.com', // Subject line
        text: `You have received a message from tackleclutter.com
           Name: ${name}
           Email: ${email}
           Phone Number: ${phone}

           Message:

           ${message}
        `
    };

    // send mail with defined transport object
    return transporter.sendMail(mailOptions);
}


var app = express();

app.post('/sendmail', function(req, res) {
    //TODO: using req.param is deprecated
    var param = req.param.bind(req);
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