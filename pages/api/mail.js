import nodemailer from 'nodemailer';
import { mailContact, recordDb, welcomeNewMember } from '../../styles/mails.ts';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      if (!req.body)
        return res.status(400).json({ message: "Don't have form data...!" });
      const email = process.env.MAIL_USER;
      const pass = process.env.MAIL_PWD;

      // console.log('in send mail send data are \n', req.body);
      // console.log('in send mail come from \n', req.body.from);

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

      let mailOptions = {};
      switch (req.body.from) {
        case 'canI':
          mailOptions = {
            from: 'watch.event@club306.fr',
            to: 'president@club306.fr, x.genolhac@gmail.com',
            subject: '👼🚘🧙 Nouvelle Interrogation de notre base 🧙🚘👼',
            text: `La recherche a concerné cette personne qui a le prénom ${req.body.value.firstName} et le nom ${req.body.value.lastName}. Celui qui a fait cette recherche utilise ce mail ${req.body.user}`,
            html: `La recherche a concerné cette personne qui a le prénom ${req.body.value.firstName} et le nom ${req.body.value.lastName}.<br>Celui qui a fait cette recherche utilise ce mail ${req.body.user}`,
          };
          break;
        case 'contact':
          mailOptions = {
            from: req.body.email,
            to: 'contact@club306.fr, president@club306.fr',
            bcc: 'x.genolhac@gmail.com',
            subject: `🌟📧🔎 Un nouveau message à lire : ${req.body.firstName} nous a écrit 🔍📧🌟`,
            text: `${req.body.message}.<br> Adresse mail ${req.body.email} pour répondre.`,
            html: mailContact(req.body.firstName, req.body.message),
          };
          break;
        case 'recordDataBase':
          mailOptions = {
            from: 'supabase-info@club306.fr',
            to: 'secretariat@club306.fr, x.genolhac@gmail.com',
            subject: `🎉🚀👤 Le nouveau membre ${req.body.first_name} ${req.body.last_name} vient de s'inscrire 👤🚀🎉`,
            text: `Enregsitrement d'un nouveau membre ${req.body.first_name} ${req.body.last_name} !`,
            html: recordDb(req.body.first_name, req.body.last_name),
          };
          break;
        case 'newMember':
          mailOptions = {
            from: 'contact@club306.fr',
            to: req.body.mail,
            bcc: 'x.genolhac@gmail.com',
            subject: 'Bienvenue au club 306',
            html: welcomeNewMember(req.body.first_name),
          };
          break;
        default:
          mailOptions = {
            from: 'big.brother@watching.you',
            to: 'x.genolhac@gmail.com',
            subject: '🚨🚨Big Brother a report for you 🚘',
            text: `${req.body}`,
            html: `${req.body}`,
          };
      }

      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('Error Sir in send mail  :: ', error);
        } else {
          console.log('mail envoyé ! ', info.response);
          return res
            .status(200)
            .json({ message: 'Email sent successfully', info });
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
