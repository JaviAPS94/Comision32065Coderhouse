require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const message = {
//     from: "alex.pinaida@hotmail.com",
//     to: "alex.pinaida94@gmail.com",
//     subject: "Test message subject",
//     html: "<b>Hello world from sendgrid with node</b>"
// };

// const message = {
//     from: "alex.pinaida@hotmail.com",
//     to: "alex.pinaida94@gmail.com",
//     subject: "Test message subject",
//     templateId: process.env.TEMPLATE_ID
// };

const message = {
    from: "alex.pinaida@hotmail.com",
    to: "alex.pinaida94@gmail.com",
    subject: "Test message subject",
    templateId: process.env.TEMPLATE_ID_TEST,
    dynamic_template_data: {
        subject: 'Testing templates',
        name: 'Alex',
        city: '<b>Quito</b>'
    }
};

(async ()=> {
    try {
        await sgMail.send(message);
    } catch (error) {
        console.log(error);
    }
})();