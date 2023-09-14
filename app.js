
import initApp from './src/router.js'
import express from 'express'

const app = express();
const port = 5000

//initApp(app,express);

// import sgMail from'@sendgrid/mail'
// import twilio from'twilio';
// const accountSid = 'AC3494540f4ccef5c41cc2631f4af8d958';
// const authToken = 'd190d6bf124feff77af8c5c54b8555a3';
// const client = twilio(accountSid, authToken);
// client.messages
//   .create({
//     body: 'Hello usef !',
//     from: '+12059003455',
//     to: '+201010390616' 
//   })
//   .then(message => console.log('Message sent:', message.sid))
//   .catch(error => console.error('Error:', error));


import nodemailer from"nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "adhammaged47@gmail.com",
    pass: "ormrcmmtdirxgncj",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendmail() {
  const info = await transporter.sendMail({
    from: {address: "adhammaged47@gmail.com"}, // sender address
    to: "usef.amr5240@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}
//sendmail();
app.listen(port, ()=>{
 console.log(`running on port....... ${port} `)
})
