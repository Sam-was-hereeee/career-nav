// lib/email/sendEmail.ts
import nodemailer from "nodemailer";

const emailContent = {
    seniorRegister:{
        content: '您好，\n' +
            '\n' +
            '感謝您註冊成為「職屬」的引路學長姐！\n' +
            '\n' +
            '我是職屬的創辦人，台大外文系二年級的先悅。\n' +
            '\n' +
            '半年來，職屬團隊不斷思索「文學院畢業後的未來何在？」的問題，透過文學院學長姐職涯訪談、經營職業資訊分享社群，嘗試化解文學院內的職涯焦慮與迷惘。\n' +
            '\n' +
            '然而僅靠著身為在學生的我們，無法完整勾勒出文學院職涯地圖的輪廓。\n' +
            '\n' +
            '因此，加入「職屬」的您，對文學院學生的意義非凡。作為走過職涯探索旅程的前行者，您的足跡將成為某個學弟妹心中珍貴的指引。學弟妹將能夠從您的經驗中看見更多自身的可能性。期待能讓學弟妹們在各自的英雄之旅上，不再隻身前行。\n' +
            '\n' +
            '未來，我們將持續推出能夠促進文學院學生與校友對話的活動，讓「職屬」不只是一對一職業諮詢平台，更是一個以人文價值為本，交流職涯發展歷程的溫暖社群。\n' +
            '\n' +
            '誠摯感謝您的加入，\n' +
            '期待與您一同描繪人文學子的職涯地圖！\n' +
            '\n' +
            '敬祝 平安順心\n' +
            '\n' +
            '黃先悅\n' +
            '職屬創辦人 敬上\n （早安我是職屬的工程師山姆，在這邊偷塞我的廣告，不知道各位學長姐是否也受夠社會對於文組無用的風氣了，我相信先悅正在創造這個時代應該要有的改變，還請大家一起支持見證我們了～',
        subject: '來自職屬創辦人的感謝信'
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
    });
}
