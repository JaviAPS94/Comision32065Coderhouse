import { createTransport } from "nodemailer";

const TEST_EMAIL = 'horace.wyman@ethereal.email';
const HOST = 'alex.pinaida.32065@gmail.com';

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: HOST,
        pass: 'icwukpisbaxsfnfj'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_EMAIL,
    subject: 'Mail de prueba desde node.js',
    html: '<h1 style="color: blue;">Contenido de prueba <span style="color: green">Node js</span></h1>',
    attachments: [
        {
            path: new URL('./nodemailer.png', import.meta.url).pathname
        }
    ]
};

try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
} catch (error) {
    console.log(error);
}