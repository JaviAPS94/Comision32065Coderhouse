const parseArgs = require('minimist');

const options = {
    default: { modo: 'prod', puerto: 0, debug: false },
    alias: { m: 'modo', p: 'puerto', d: 'debug' }
};

console.log(parseArgs(process.argv.slice(2), options));