// lib/email/sendEmail.ts
import nodemailer from "nodemailer";

export async function sendEmail(subject: string, message: string, to: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL!,
            pass: process.env.GOOGLE_APP_PASSWORD!
        },
    });

    await transporter.sendMail({
        from: `"Your App" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text: message,
    });
}
