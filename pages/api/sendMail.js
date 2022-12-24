import sgMail from '@sendgrid/mail';


export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'INVALID_METHOD' });
    return;
  }

  console.log('req.body', req.body);
  //const { email, prenom, nom } = req.body;

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

  const msg = {
    to: 'genolhac@gmail.com',
    from: 'spamxg@free.fr', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };
//ES6
  sgMail
    .send(msg)
    .then(() => {
    }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    });
//ES8
  (async () => {
    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'EMAIL_SEND_SUCCESSFULLY' });
    } catch (error) {
      res.status(500).json({ message: 'ERROR_WITH_SENDGRID', error: error.response.body });
    }
  })();
}
