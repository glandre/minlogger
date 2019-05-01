# minlogger

A Minimal Logger based on Console

## Install

```
npm i minlogger
```

## Usage

```js
import { createLogger } from 'minlogger'

const logger = createLogger({
  level: 'debug',
  spaced: true
})

logger.error('Error Message', { moreInfo: 'Details' })

logger.warn('Warning Message', { moreInfo: 'Details' })

logger.info('Info Message', { moreInfo: 'Details' })

// uses console.log (not console.debug)
logger.debug('Debug Message', { moreInfo: 'Details' })

logger.silly('Debug Message', { moreInfo: 'Details' })
```

### Options

#### **level (String)**

Level of `console`. Possible values are: `error`, `warn`, `info`, `verbose`, `debug`, `silly`

_Default: `error`_

_Notice: the standard `console.debug` is not used, `console.log` is used instead._

#### **spaced (Boolean)**

Print several lines before and after each message.

_Default: `false`_
