import nodemailer from 'nodemailer';
import {
  addNewCar,
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
          to: 'president@club306.fr, x.genolhac@gmail.com',
          subject: '👼🚘🧙 Nouvelle Interrogation de notre base 🧙🚘👼',
          text: `La recherche a concerné cette personne qui a le prénom ${body.value.firstName} et le nom ${body.value.lastName}. Celui qui a fait cette recherche utilise ce mail ${body.user}`,
          html: `La recherche a concerné cette personne qui a le prénom ${body.value.firstName} et le nom ${body.value.lastName}.<br>Celui qui a fait cette recherche utilise ce mail ${body.user}`,
        };
        break;
      case 'contact':
        mailOptions = {
          from: body.email,
          to: 'contact@club306.fr, president@club306.fr',
          bcc: 'x.genolhac@gmail.com',
          subject: `🌟📧🔎 Un nouveau message à lire : ${body.firstName} nous a écrit 🔍📧🌟`,
          text: `${body.message}.<br> Adresse mail ${body.email} pour répondre.`,
          html: mailContact(body.firstName, body.message),
        };
        break;
      case 'newCar':
        mailOptions = {
          from: 'supabase-info@club306.fr',
          to: 'president@club306.fr',
          bcc: 'x.genolhac@gmail.com',
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
          bcc: 'x.genolhac@gmail.com',
          subject: 'Bienvenue au club 306',
          html: welcomeNewMember(body.first_name),
        };
        break;
      case 'oldCar':
        mailOptions = {
          from: 'supabase-info@club306.fr',
          to: 'president@club306.fr',
          bcc: 'x.genolhac@gmail.com',
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
          to: 'secretariat@club306.fr, x.genolhac@gmail.com',
          subject: `🎉🚀👤 Le nouveau membre ${body.first_name} ${body.last_name} vient de s'inscrire 👤🚀🎉`,
          text: `Enregsitrement d'un nouveau membre ${body.first_name} ${body.last_name} !`,
          html: recordDb(body.first_name, body.last_name),
        };
        break;
      case 'updateCarInfo':
        mailOptions = {
          from: 'supabase-info@club306.fr',
          to: 'president@club306.fr',
          bcc: 'x.genolhac@gmail.com',
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
          bcc: 'x.genolhac@gmail.com',
          subject: 'Votre code pour définir un nouveau mot de passe',
          html: sendOTP(body.otp),
        };
        break;
      default:
        mailOptions = {
          from: 'bigBrother.watchingYou@club306.fr',
          to: 'x.genolhac@gmail.com',
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
