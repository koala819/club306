const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "mail.club306.fr",
    port: 465,
    secure: true,
    auth: {
		user: 'contact@club306.fr',
		pass: '8J(D{j+f{rw,'
    },
	tls: { rejectUnauthorized: false }
  });

const mailOptions = {
	from: '"Fred Foo 👻" <foo@example.com>', // sender address
	to: "contact@club306.fr", // list of receivers
	subject: "Hello ✔", // Subject line
	text: "Hello world?", // plain text body
	html: "<b>Hello world?</b>", // html body
};
transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
	})
