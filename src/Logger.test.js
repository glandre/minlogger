import { createLogger as distCreateLogger } from '../dist/Logger'
import { createLogger as srcCreateLogger } from './Logger'

const createLogger = process.env.CI ? distCreateLogger : srcCreateLogger
console.log(
  'What to test:',
  process.env.CI ? 'dist/Logger.js' : 'src/Logger.js'
)

describe('Logger', () => {
  describe('constructor', () => {
    it('should use `debug` as default level', () => {
      const logger = createLogger()
      expect(logger.level).toBe('debug')
    })
    it('should use `error` if level is not inluded in LogLevel', () => {
      const logger = createLogger({ level: 'critical' })
      expect(logger.level).toBe('error')
    })
  })
  describe('log()', () => {
    beforeEach(() => {
      console.error = jest.fn()
      console.warn = jest.fn()
      console.info = jest.fn()
      console.debug = jest.fn()
      console.log = jest.fn()
    })

    it('should not log message if level is lower than LogLevel', () => {
      const logger = createLogger({ level: 'error', spaced: true })

      logger.debug('Debug Message')
      logger.warn('Warning Message')
      logger.error('Error Message', { errorData: 'test' })

      expect(console.log).not.toBeCalled()
      expect(console.warn).not.toBeCalled()
      expect(console.error).toBeCalledTimes(1)
    })

    it('should call console.log instead of console.debug', () => {
      const logger = createLogger({ level: 'debug' })

      logger.debug('Debug Message')

      expect(console.log).toBeCalledTimes(1)
      expect(console.debug).not.toBeCalled()
    })

    it('should call all functions if level is silly', () => {
      const logger = createLogger({ level: 'silly' })

      logger.silly('Silly Message') // uses log()
      logger.debug('Debug Message') // uses log()
      logger.verbose('Verbose Message') // uses log()
      logger.info('Info Message')
      logger.warn('Warning Message')
      logger.error('Error Message')

      expect(console.log).toBeCalledTimes(3)
      expect(console.info).toBeCalledTimes(1)
      expect(console.warn).toBeCalledTimes(1)
      expect(console.error).toBeCalledTimes(1)
    })
  })
})
