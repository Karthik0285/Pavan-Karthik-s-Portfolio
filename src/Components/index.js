const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const SMTP_SERVER = 'smtp.gmail.com';
const SMTP_PORT = 587;
const SMTP_USERNAME = 'pavan.karthik.udayagiri@gmail.com'; 
const SMTP_PASSWORD = 'Karthik@2205'; 
const RECIPIENT_EMAIL = 'pavankarthik634@gmail.com'; 

let transporter = nodemailer.createTransport({
    host: SMTP_SERVER,
    port: SMTP_PORT,
    secure: false, 
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD 
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html'); 
});

app.post('/', (req, res) => {
    let form_data = req.body;

    let mailOptions = {
        from: form_data.email, 
        to: RECIPIENT_EMAIL, 
        subject: `Form Submission from ${form_data.name}`, 
        text: `Name: ${form_data.name}\nEmail:${form_data.email}\nMessage:${form_data.message}` 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
        
        console.log('Email sent:', info.response);
        
        res.send('Form submitted successfully!');
    });
});

app.listen(3000, () => console.log('Server started on [1](http://localhost:3000)'));