import twilio from "twilio";

const accountSid = 'ACbd348cf8313989404172d42b230bd273';
const authToken = '762859021cad6bdab940830a412a881e';
const fromPhoneNumber = '+18452038455';
const to = '+593958963171';

const client = twilio(accountSid, authToken);

const options = {
    body: 'Hola soy un SMS desde Node.js',
    from: fromPhoneNumber,
    to
};

try {
    const message = await client.messages.create(options);
    console.log(message);
} catch (error) {
    console.log(error);
}

