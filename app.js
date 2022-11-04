const express = require("express");
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    
    const { email, name, message } = req.body;
        let transporter = nodemailer.createTransport({
          service: "gmail",
          secure: false,
          port: 25,
          auth: {
            user: "austintjohnson92@gmail.com",
            pass: "zanrexqjrcixlhmu"
          },
          tls: {
            rejectUnauthorized: false
          }
        });
  
        const emailOutputToUser = `
    <div style="background:#fff; width:100%; text-align: center; padding:30px 0px;box-sizing: border-box;">
   
   <div>
   name: ${name}
   </div>
   <div>
   email: ${email}
   </div>
   <div>
   message: ${message}
   </div>
        `;
  
        let mailOptionsToUser = {
          from: 'austintjohnson92@gmail.com',
          to: 'austintjohnson92@gmail.com', 
          attachments: [],
          subject: `${name}, ${email}`,
          text: "", 
          html: emailOutputToUser
        };
  
        transporter.sendMail(mailOptionsToUser, (error, info) => {
          if (error) {
            res.status(500).send({ message: 'error' })
            return console.log(error);
          }
          console.log("User sent: %s", info.messageId);
          
          res.status(200).send({ message: 'success' })
        });
    
});



app.use((req, res, next) => {
const error = new Error("Not Found");
res.status(404);
next(error);
});

app.use((error, req, res, next) => {
res.status(error.status || 500);
res.json({
    error: {
        message: error.message
    }
});
});




module.exports = app;