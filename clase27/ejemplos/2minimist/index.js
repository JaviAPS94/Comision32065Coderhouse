const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));

const options = { 
    default: { puerto: 8080, apellido: 'test' },
    alias: { p: 'puerto', n: 'name' }
 }

const variables = (parseArgs(['-n', 'alex'], options));

app.listen(variables.puerto);
// console.log(args);