const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const auth = {
  // add api key for authentication
        auth: {
            api_key: '',
            domain: ''
        }
    };
const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = (name, email, subject, text, cb) => {
  const mailOptions = {
      sender: name,
      from: email,
      to: 'recipient@email.com',
      subject: subject,
      text: text
  };
  transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
          cb(err, null);
      } else {
          cb(null, data);
      }
  });
// Exporting the sendmail
module.exports = sendMail;
}
/*
/Okay now lets see where to get our email api_keys and the domain from mailGun. 
//Sign up if don't have an account with them.
Once done, on the dashboard page scroll down to the bottom where you'll see sending domain and copy the domain address
Click the eye icon to reveal the hidden key and copy it
Once you get these, place them in the auth object:
*/












// Send Mails with Gmail and Nodemailer
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: process.env.MAIL_USERNAME,
//       pass: process.env.MAIL_PASSWORD,
//       clientId: process.env.OAUTH_CLIENTID,
//       clientSecret: process.env.OAUTH_CLIENT_SECRET,
//       refreshToken: process.env.OAUTH_REFRESH_TOKEN
//     }
// });

