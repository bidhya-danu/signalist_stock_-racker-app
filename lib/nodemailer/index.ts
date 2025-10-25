import nodemailer from 'nodemailer';
import { WELCOME_EMAIL_TEMPLATE } from './templates';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,

    }
})

export const sendWelcomeEmail = async({email, name, intro}: WelcomeEmailData) => {
    const htmlTemplates = WELCOME_EMAIL_TEMPLATE
    .replace('{{name}}', name)
    .replace('{{intro}}', intro);

    const mailOptions = {
        from: `"Signalist" <bidhyadanu1286@gmail.com>`,
        to: email,
        subject: 'Welcome to Signalist - your stock market toolkit is ready',
        text: 'Thankyou for joining Signalist',
        html: htmlTemplates,
    }

    await transporter.sendMail(mailOptions);

}