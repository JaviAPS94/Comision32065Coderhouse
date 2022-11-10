import { createTransport } from "nodemailer";

const TEST_EMAIL = 'horace.wyman@ethereal.email';

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_EMAIL,
        pass: 'eKbk5P6mKSwzkU8FG6'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_EMAIL,
    subject: 'Mail de prueba desde node.js',
    html: '<h1 style="color: blue;">Contenido de prueba <span style="color: green">Node js</span></h1>'
};

try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
} catch (error) {
    console.log(error);
}