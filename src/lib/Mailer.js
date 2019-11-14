import { createTransport } from 'nodemailer';

class Mailer {
  constructor() {
    this.transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendMail(data) {
    await this.transporter.sendMail({ from: process.env.SMTP_FROM, ...data });
  }
}

export default new Mailer();
