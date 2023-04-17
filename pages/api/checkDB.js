import { mailOptions, transporter } from './mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: 'This is a test string',
        html: '<h1>Test Title</h1><p>Some body test</p>',
      });
      return res.status(200).json({ sucess: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
