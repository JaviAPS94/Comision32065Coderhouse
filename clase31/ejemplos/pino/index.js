const logger = require('pino')();

//trace
//debug
//info
//warn
//error
//fatal

logger.trace('pino trace');
logger.debug('pino debug');
logger.info('pino info');
logger.warn('pino warn');
logger.error('pino error');
logger.fatal('pino fatal');

logger.info('Error %o', 42);
logger.info({a: 42}, 'Error objeto');
