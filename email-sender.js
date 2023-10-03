const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mehdichaaki@gmail.com', 
        pass: 'z#&{Suw,FG#M',        
    },
});


const mailOptions = {
    from: 'mehdichaaki@gmail.com',
    to: 'chaakimehdi150@gmail.com',  
    subject: 'Test Email',
    text: 'This is a test email from Node.js!',
};


transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
