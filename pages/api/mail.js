import nodemailer from 'nodemailer';
//const nodemailer = require("nodemailer");

// console.log('check mail : ',process.env.CLIENT_URL)

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      if (!req.body)
        return res.status(400).json({ message: "Don't have form data...!" });
      const email = process.env.MAIL_USER;
      const pass = process.env.MAIL_PWD;
      console.log('in send mail send data are \n', req.body);
      console.log('in send mail come from \n', req.body.from);

      const transporter = nodemailer.createTransport({
        host: 'mail.club306.fr',
        port: 465,
        secure: true,
        auth: {
          user: email,
          pass,
        },
        tls: { rejectUnauthorized: false },
      });

      const mailOptions = {
        from:
          req.body.from === 'canI'
            ? '"👼🚘🧙 Nouvelle Interrogation de notre base 🧙🚘👼" <watch.event@club306.fr>'
            : '"🌟📧🔎 Un nouveau message à lire 🔍📧🌟" <contact-page@club306.fr>', // sender address
        to:
          req.body.from === 'canI'
            ? 'president@club306.fr, xgenolhac@gmail.com'
            : 'contact@club306.fr, president@club306.fr, xgenolhac@gmail.com', // list of receivers
        subject:
          req.body.from === 'canI'
            ? 'Nouvelle recherche dans notre base détectée !!!'
            : `${req.body.firstName} nous a écrit`, // Subject line
        text:
          req.body.from === 'canI'
            ? `La recherche a concerné cette personne qui a le prénom ${req.body.value.firstName} et le nom ${req.body.value.lastName}. Celui qui a fait cette recherche utilise ce mail ${req.body.user}`
            : `${req.body.message}.<br> Adresse mail ${req.body.email} pour répondre.`, // plain text body
        html:
          req.body.from === 'canI'
            ? `La recherche a concerné cette personne qui a le prénom ${req.body.value.firstName} et le nom ${req.body.value.lastName}.<br>Celui qui a fait cette recherche utilise ce mail ${req.body.user}`
            : `${req.body.message}.<br><br><br>Adresse mail :: <b>${req.body.email}</b>.`, // plain text body// html body
      };

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          console.log('Error Sir in send mail  :: ', error);
        } else {
          res.status(200).json({ message: 'Email sent successfully' });
        }
      });
    } else {
      res
        .status(500)
        .json({ message: 'HTTP method not valid only POST Accepted' });
    }
  } catch (error) {
    console.log('Error Sir in send mail  :: ', error);
    res.json(error);
    res.status(405).end;
  }
}

// export const mailOptions = {
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: 'contact@club306.fr', // list of receivers
//   subject: 'Hello ✔', // Subject line
//   text: 'Hello world?', // plain text body
//   html: '<b>Hello world?</b>', // html body
// };
// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
