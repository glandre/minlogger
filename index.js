const { createLogger } = require('./dist/Logger')

const logger = createLogger({ spaced: true })

logger.debug('Hello')
logger.debug('World')
