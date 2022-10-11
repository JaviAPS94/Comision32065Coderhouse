const yargs = require('yargs/yargs')(process.argv.slice(2));

// const args = yargs.argv;

const args = yargs.default({
    modo: 'prod',
    puerto: 0,
    debug: false
}).alias({
    m: 'modo',
    p: 'puerto',
    d: 'debug'
}).argv

console.log(args);

const PORT = 8080

API_KEY=
API_SECRET=