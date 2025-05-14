// lib/email/sendEmail.ts
import nodemailer from "nodemailer";

const emailContent = {
    seniorRegister:{
        subject: '💌 來自職屬創辦人的感謝信',
        content: '您好，\n' +
            '\n' +
            '我是職屬的創辦人，台大外文系二年級的先悅。\n' +
            '\n' +
            '感謝您註冊成為「職屬」的引路學長姐！\n' +
            '\n' +
            '半年來，我們不斷思索「文學院畢業後的未來何在？」並嘗試帶來正向改變。因此加入「職屬」的您，對我們這群在學的文學院學生意義非凡！作為走過職涯探索之旅的前行者，您的足跡將成為某個學弟妹心中珍貴的指引。學弟妹可以從您的經驗中看見更多自身發展的可能性。您的參與，將讓學弟妹們在各自的英雄之旅上，不再隻身前行 🤝\n' +
            '\n' +
            '我們將持續推出能夠促進文學院學生與校友對話的活動，讓「職屬」不只是一對一職業諮詢平台，更是一個以人文價值為本，交流職涯發展歷程的溫暖社群。\n' +
            '\n' +
            '歡迎您加入【職屬】匿名社群，與其他文學院職屬學長姐交流想法，認識更多來自不同領域的夥伴！\n' +
            '👉 加入職屬: https://line.me/ti/g2/rAlwtXhkZQXfTC3SYwb_9_Kx_1uN4w_4jUbNYg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default' + '\n' +
            '再次感謝您的加入，期待與您一同描繪人文學子的職涯地圖！\n' +
            '\n' +
            'May your own journey shine bright✨\n' +
            '\n' +
            '職屬｜Step Senior\n' +
            '創辦人\n' +
            '黃先悅｜Jocelyn Huang\n',
        html: `
            <p>您好，</p>
            <p>我是職屬的創辦人，台大外文系二年級的先悅。</p>
            <p>感謝您註冊成為「職屬」的引路學長姐！</p>
            <p>半年來，我們不斷思索「文學院畢業後的未來何在？」並嘗試帶來正向改變。因此加入「職屬」的您，對我們這群在學的文學院學生意義非凡！作為走過職涯探索之旅的前行者，您的足跡將成為某個學弟妹心中珍貴的指引。學弟妹可以從您的經驗中看見更多自身發展的可能性。您的參與，將讓學弟妹們在各自的英雄之旅上，不再隻身前行 🤝</p>
            <p>我們將持續推出能夠促進文學院學生與校友對話的活動，讓「職屬」不只是一對一職業諮詢平台，更是一個以人文價值為本，交流職涯發展歷程的溫暖社群。</p>
            <p>歡迎您加入【職屬】LINE OpenChat，與其他文學院職屬學長姐交流想法，認識更多來自不同領域的夥伴！<br/>
            👉 <a href="https://line.me/ti/g2/rAlwtXhkZQXfTC3SYwb_9_Kx_1uN4w_4jUbNYg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">加入職屬</a><br/>
            再次感謝您的加入，期待與您一同描繪人文學子的職涯地圖！
            </p>
            <p>May your own journey shine bright✨</p>
            <p>
            職屬｜Step Senior<br/>
            創辦人<br/>
            黃先悅｜Jocelyn Huang
            </p>
        `

    }
}

export async function sendEmail(mode: 'seniorRegister',to: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL!,
            pass: process.env.GOOGLE_APP_PASSWORD!
        },
    });

    await transporter.sendMail({
        from: `"職屬" <${process.env.GMAIL}>`,
        to,
        subject: emailContent[mode].subject,
        text: emailContent[mode].content,
        html: emailContent[mode].html,
    });
}
