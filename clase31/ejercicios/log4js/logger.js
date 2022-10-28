// const log4js = require('log4js');
// const winston = require('winston');
const pino = require('pino');

// silly 6
// debug 5
// verbose 4
// info 3
// warn 2
// error 1

//LOG4JS
// log4js.configure({
//     appenders: {
//         console: { type: 'console' },
//         archivoErrores: { type: 'file', filename: 'errores.log' },
//         archivoDebug: { type: 'file', filename: 'debug.log' },
//         loggerConsola: { type: 'logLevelFilter', appender: 'console', level: 'info' },
//         loggerArchivoErrores: { type: 'logLevelFilter', appender: 'archivoErrores', level: 'error' },
//         loggerArchivoDebug: { type: 'logLevelFilter', appender: 'archivoDebug', level: 'debug' }
//     },
//     categories: {
//         default: {
//             appenders: ['loggerConsola'], level: 'all'
//         },
//         prod: {
//             appenders: ['loggerArchivoErrores', 'loggerArchivoDebug'], level: 'all'
//         }
//     }
// });

// const logger = (process.env.NODE_ENV === 'PROD') ?
//     log4js.getLogger('prod') : log4js.getLogger('default');

// WINSTON

// function buildProdLogger() {
//     const prodLogger = winston.createLogger({
//         transports: [
//             new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
//             new winston.transports.File({ filename: 'errores.log', level: 'error' }),
//         ]
//     });
//     return prodLogger;
// }

// function buildDevLogger() {
//     const devLogger = winston.createLogger({
//         transports: [
//             new winston.transports.Console({ level: 'info' })
//         ]
//     });
//     return devLogger;
// }

// const logger = (process.env.NODE_ENV === 'PROD') ?
//     buildProdLogger() : buildDevLogger();

//PINO

function buildProdLogger() {
    const prodLogger = pino('debug.log');
    prodLogger.level = 'debug';
    return prodLogger;
}

function buildDevLogger() {
    const devLogger = pino();
    devLogger.level = 'info';
    return devLogger;
}

const logger = (process.env.NODE_ENV === 'PROD') ?
     buildProdLogger() : buildDevLogger();

module.exports = logger;