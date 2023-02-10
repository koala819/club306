import nodemailer from 'nodemailer';
//const nodemailer = require("nodemailer");

const email = process.env.MAIL_USER;
const pass = process.env.MAIL_PWD;
console.log('check mail : ',process.env.CLIENT_URL)

export const transporter = nodemailer.createTransport({
	host: "mail.club306.fr",
    port: 465,
    secure: true,
    auth: {
		user: email,
		pass
    },
	tls: { rejectUnauthorized: false }
  });

export const mailOptions = {
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
