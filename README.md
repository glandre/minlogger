# minlogger

Setting up Winston would be too much work in the begginning of your project?
Meet `minlogger`, a Minimal Logger based on Console! Get your project started with it, and migrate to Winston when the time is right!

`minlogger` provides a compatible interface as `winston`, allowing you to easily switch between the two.

## Install

```
npm i minlogger
```

## Usage

```js
import { createLogger } from 'minlogger'

const logger = createLogger({
  level: 'info',
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

_Default: `debug`_

_Notice: the standard `console.debug` is not used, `console.log` is used instead._

#### **spaced (Boolean)**

Print several lines before and after each message.

_Default: `false`_
