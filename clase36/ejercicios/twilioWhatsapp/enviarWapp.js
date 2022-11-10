import twilio from "twilio";

const accountSid = 'ACbd348cf8313989404172d42b230bd273';
const authToken = '762859021cad6bdab940830a412a881e';

const client = twilio(accountSid, authToken);

const number = process.argv[2];
const message = process.argv[3];

const options = {
    body: message,
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${number}`
};

try {
    const message = await client.messages.create(options);
    console.log(message);
} catch (error) {
    console.log(error);
}