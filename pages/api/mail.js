import nodemailer from 'nodemailer';

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
            from: '"👼🚘🧙 Nouvelle Interrogation de notre base 🧙🚘👼" <watch.event@club306.fr>',
            to: 'president@club306.fr, xgenolhac@gmail.com',
            subject: 'Nouvelle recherche dans notre base détectée !!!',
            text: `La recherche a concerné cette personne qui a le prénom ${req.body.value.firstName} et le nom ${req.body.value.lastName}. Celui qui a fait cette recherche utilise ce mail ${req.body.user}`,
            html: `La recherche a concerné cette personne qui a le prénom ${req.body.value.firstName} et le nom ${req.body.value.lastName}.<br>Celui qui a fait cette recherche utilise ce mail ${req.body.user}`,
          };
          break;
        case 'contact':
          mailOptions = {
            from: '"🌟📧🔎 Un nouveau message à lire 🔍📧🌟" <contact-page@club306.fr>',
            to: 'contact@club306.fr, president@club306.fr, xgenolhac@gmail.com',
            subject: `${req.body.firstName} nous a écrit`,
            text: `${req.body.message}.<br> Adresse mail ${req.body.email} pour répondre.`,
            html: `${req.body.message}.<br><br><br>Adresse mail :: <b>${req.body.email}</b>.`,
          };
          break;
        case 'recordDataBase':
          mailOptions = {
            from: '"🎉🚀👤 Un nouveau membre vient de s\'inscrire 👤🚀🎉" <contact-page@club306.fr>',
            // to: 'president@club306.fr, xgenolhac@gmail.com',
            to: ' xgenolhac@gmail.com',
            subject: `${req.body.first_name} ${req.body.last_name} vient de s'inscrire`,
            html: `${req.body.first_name}<br>${req.body.last_name}<br>${req.body.address}<br>${req.body.zip_code}<br>${req.body.town}<br>${req.body.phone}<br>${req.body.immatriculation}<br>${req.body.birth_date}<br>${req.body.color}<br>${req.body.model}<br>${req.body.email}`,
          };
          break;
        default:
          mailOptions = {
            from: '"🚨🚨Big Brother a report for you 🚘" <big.brother@watching.you>',
            to: 'xgenolhac@gmail.com',
            subject: 'Mail envoyé cas par défaut from Club306.fr',
            text: `${req.body}`,
            html: `${req.body}`,
          };
      }

      await transporter.sendMail(mailOptions, function (error) {
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
