const log4js = require('log4js');

// trace 6
// debug 5
// info 4
// warn 3
// error 2
// fatal 1

log4js.configure({
    appenders: { //Salida, output, consola o por archivo
        miLoggerConsole: { type: 'console' },
        miLoggerFile: { type: 'file', filename: 'info.log' },
        miLoggerFile2: { type: 'file', filename: 'info2.log' },
    },
    categories: {
        default: { appenders: ['miLoggerConsole'], level: 'trace' },
        console: { appenders: ['miLoggerConsole'], level: 'debug' },
        archivo: { appenders: ['miLoggerFile'], level: 'warn' },
        archivo2: { appenders: ['miLoggerFile2', 'miLoggerConsole'], level: 'info' }
    }
});

const logger = log4js.getLogger('archivo2');

logger.trace('Log trace');
logger.debug('Log debug');
logger.info('Log info');
logger.warn('Log warn');
logger.error('Log error');
logger.fatal('Log fatal');

