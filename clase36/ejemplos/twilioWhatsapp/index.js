import twilio from "twilio";

const accountSid = 'ACbd348cf8313989404172d42b230bd273';
const authToken = '762859021cad6bdab940830a412a881e';

const client = twilio(accountSid, authToken);

const options = {
    body: 'Hola soy un WSP desde Node.js',
    mediaUrl: ['https://lanacion.com.ec/wp-content/uploads/2019/12/logos-coderhouse-01.png'],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+593958963171'
};

try {
    const message = await client.messages.create(options);
    console.log(message);
} catch (error) {
    console.log(error);
}