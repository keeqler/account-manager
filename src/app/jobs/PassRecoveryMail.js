import Mailer from '@/lib/Mailer';

class PassRecoveryMail {
  get key() {
    return 'PassRecoveryMail';
  }

  async handle({ data }) {
    const { email, token } = data;

    await Mailer.sendMail({
      to: `${email.split('@')[0]} <${email}>`,
      subject: 'Account Manager password recovery token',
      text: token,
    });
  }
}

export default new PassRecoveryMail();
