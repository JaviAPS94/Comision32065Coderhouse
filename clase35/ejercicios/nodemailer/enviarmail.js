import nodemailer from 'nodemailer';

const TEST_EMAIL = 'horace.wyman@ethereal.email'
const FROM_GMAIL_MAIL = 'alex.pinaida.32065@gmail.com'

function createSendMail(mailConfig) {
    const transporter = nodemailer.createTransport(mailConfig);

    return function sendMail({ to, subject, text, html, attachments }) {
        const mailOptions = {
            from: mailConfig.auth.user,
            to,
            subject,
            text,
            html,
            attachments
        };

        return transporter.sendMail(mailOptions);        
    }
}

function createSendMailEthereal() {
    return createSendMail({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: TEST_EMAIL,
            pass: 'eKbk5P6mKSwzkU8FG6'
        }
    });
};

function createSendMailGmail() {
    return createSendMail({
        service: 'gmail',
        port: 587,
        auth: {
            user: FROM_GMAIL_MAIL,
            pass: 'icwukpisbaxsfnfj'
        }
    }); 
}

const sendMail = createSendMailGmail();

const cuentaPrueba = TEST_EMAIL;
const asunto = process.argv[2] || 'sin asunto';
const mensajeHtml = process.argv[3] || 'nada que decir';
const rutaAdjunto = process.argv[4];
const adjuntos = [];

if (rutaAdjunto) {
    adjuntos.push({ path: rutaAdjunto })
};

const info = await sendMail({
    to: cuentaPrueba,
    subject: asunto,
    html: mensajeHtml,
    attachments: adjuntos
});

console.log(info);

