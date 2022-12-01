const https = require('https');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/posts',
    method: 'GET'
};

const request = https.request(options, response => {
    console.log(`statusCode: ${response.statusCode}`);

    response.on('data', d => {
        process.stdout.write(d);
    });
});

request.on('error', error => {
    console.error(error);
});

request.end();