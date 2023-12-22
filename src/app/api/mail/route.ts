import nodemailer from 'nodemailer';
import {
  addNewCar,
  confirMail,
  mailContact,
  recordDb,
  removeCar,
  sendOTP,
  updateCarInfo,
  welcomeNewMember,
} from '@/lib/mails';

export async function POST(req: Request): Promise<Response> {
  if (!req.body)
    return new Response(JSON.stringify("Don't have form data...!"), {
      status: 403,
      statusText: "Don't have form data...!",
    });

  const email = process.env.MAIL_USER;
  const pass = process.env.MAIL_PWD;
  const host = process.env.MAIL_HOST;
  const port = process.env.MAIL_PORT;

  const body = await req.json();
  if (!email || !pass || !host || !port) {
    console.error('One or more required environment variables are not set.');
  } else {
    const transporter = nodemailer.createTransport({
      host: host,
      port: parseInt(port),
      secure: true,
      auth: {
        user: email,
        pass,
      },
      tls: { rejectUnauthorized: false },
    });

    let mailOptions = {};
    switch (body.from) {
      case 'canI':
        mailOptions = {
          from: 'watch.event@club306.fr',
          to: 'president@club306.fr, webmaster@club306.fr',
          subject: '👼🚘🧙 Nouvelle Interrogation de notre base 🧙🚘👼',
          text: `La recherche a concerné cette personne qui a le prénom ${body.value.firstName} et le nom ${body.value.lastName}. Celui qui a fait cette recherche utilise ce mail ${body.user}`,
          html: `La recherche a concerné cette personne qui a le prénom ${body.value.firstName} et le nom ${body.value.lastName}.<br>Celui qui a fait cette recherche utilise ce mail ${body.user}`,
        };
        break;
      case 'contact':
        mailOptions = {
          from: body.email,
          to: 'contact@club306.fr, president@club306.fr',
          bcc: 'webmaster@club306.fr',
          subject: `🌟📧🔎 Un nouveau message à lire : ${body.firstName} nous a écrit 🔍📧🌟`,
          text: `${body.message}.<br> Adresse mail ${body.email} pour répondre.`,
          html: mailContact(body.firstName, body.message),
        };
        break;
      case 'mailConfirm':
        mailOptions = {
          from: 'contact@club306.fr',
          to: body.mail,
          bcc: 'webmaster@club306.fr',
          subject: 'Vérification de votre adresse e-mail',
          text: `<p>Bonjour ${body.first_name} ${body.last_name},</p>
          <p>Nous sommes ravis de vous accueillir parmi nous ! Avant de commencer à utiliser les services du Club 306, nous avons besoin de vérifier que cette adresse e-mail vous appartient.</p>
          <p>Veuillez cliquer sur le lien ci-dessous pour valider votre adresse e-mail :</p>
          <p align="center">&nbsp;<a href="${process.env.CLIENT_URL}/verify-email?token=${body.token}"
              title="lien verif email" target="_blank">Lien</a></p>
          <p>Si vous n'avez pas créé de compte sur Club 306, veuillez ignorer ce message.</p>
          <p>Si vous avez des questions ou besoin d'aide, n'hésitez pas à nous contacter à webmaster@club306.fr.</p>
          <p>Merci de nous avoir rejoint,</p>
          <p>Club 306</p>`,
          html: confirMail(body.first_name, body.last_name, body.token),
        };
        break;
      case 'newCar':
        mailOptions = {
          from: 'supabase-info@club306.fr',
          to: 'president@club306.fr',
          bcc: 'webmaster@club306.fr',
          subject: `🔎 Le membre ${body.first_name} ${body.last_name} s'est ajouté une nouvelle voiture`,
          text: `Le membre ${body.first_name} ${body.last_name} a créé une nouvelle voiture avec immatriculation : ${body.immatriculation}, le type mine : ${body.mine}, la finition ${body.finition}, la couleur ${body.color} et le modèle ${body.model}.`,
          html: addNewCar(
            body.first_name,
            body.last_name,
            body.color,
            body.immatriculation,
            body.finition,
            body.model,
            body.mine
          ),
        };
        break;
      case 'newMember':
        mailOptions = {
          from: 'contact@club306.fr',
          to: body.mail,
          bcc: 'webmaster@club306.fr',
          subject: 'Bienvenue au club 306',
          html: welcomeNewMember(body.first_name),
        };
        break;
      case 'oldCar':
        mailOptions = {
          from: 'supabase-info@club306.fr',
          to: 'president@club306.fr',
          bcc: 'webmaster@club306.fr',
          subject: `🏛 Le membre ${body.first_name} ${body.last_name} a supprimé une voiture🚧`,
          text: `Le membre ${body.first_name} ${body.last_name} a supprimé voiture avec immatriculation : ${body.immatriculation}, le type mine : ${body.mine}, la finition ${body.finition}, la couleur ${body.color}, le modèle ${body.model} et pour la raison ${body.reason}.`,
          html: removeCar(
            body.first_name,
            body.last_name,
            body.color,
            body.immatriculation,
            body.finition,
            body.model,
            body.mine,
            body.reason
          ),
        };
        break;
      case 'recordDataBase':
        mailOptions = {
          from: 'supabase-info@club306.fr',
          to: 'secretariat@club306.fr, webmaster@club306.fr',
          subject: `🎉🚀👤 Le nouveau membre ${body.first_name} ${body.last_name} vient de s'inscrire 👤🚀🎉`,
          text: `Enregsitrement d'un nouveau membre ${body.first_name} ${body.last_name} !`,
          html: recordDb(body.first_name, body.last_name),
        };
        break;
      case 'updateCarInfo':
        mailOptions = {
          from: 'supabase-info@club306.fr',
          to: 'president@club306.fr',
          bcc: 'webmaster@club306.fr',
          subject: `🔎 Le membre ${body.first_name} ${body.last_name} a mis à jour ${body.type} de ${body.immatriculation}`,
          text: `Le membre ${body.first_name} ${body.last_name} a mis à jour son ${body.type}. Ancienne valeur : ${body.old_value} Nouvelle valeur : ${body.new_value} Pour sa voiture avec l'immatriculation : ${body.immatriculation} !`,
          html: updateCarInfo(
            body.first_name,
            body.last_name,
            body.type,
            body.old_value,
            body.new_value,
            body.immatriculation
          ),
        };
        break;

      case 'rstPwd':
        mailOptions = {
          from: 'contact@club306.fr',
          to: body.mail,
          bcc: 'webmaster@club306.fr',
          subject: 'Votre code pour définir un nouveau mot de passe',
          html: sendOTP(body.otp),
        };
        break;
      default:
        mailOptions = {
          from: 'bigBrother.watchingYou@club306.fr',
          to: 'webmaster@club306.fr',
          subject: '🚨🚨Big Brother a report for you 🚘',
          text: `${req}`,
          html: `<html>fonction mail de club306 déclenchée !!!<br/> ${body.value.firstName} ${body.value.lastName}<br/>${body.user}<br>${body.from}</html>`,
        };
    }

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify('GOOD'), {
      status: 200,
      statusText: 'Send the email with success',
    });
  }
  return new Response(JSON.stringify('Something went wrong'), {
    status: 500,
    statusText: 'Internal Server Error',
  });
}
