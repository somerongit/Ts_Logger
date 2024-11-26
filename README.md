# Ts_Logger

Example Code

```ts
// For TypeScript
import Logger from "./Logger";
// Initializing Logger with file path 
const logger: Logger = new Logger(__filename)

/*
You can set debug mode false by passing false as a second parameter
   const logger: Logger = new Logger(__filename,false)
*/

import Logger from "./Logger";
// Initializing Logger with file path 
const logger: Logger = new Logger(__filename)
```

```js
// For JavaScript
import Logger from './Logger.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const logger = new Logger(__filename)
```

```ts
/*
You can set debug mode false by passing false as a second parameter
   const logger: Logger = new Logger(__filename,false)
*/

logger.info("Information Title", "printInfo")
// Info 28-Mar-2023, 15:16:23 \src\controller.ts Information => printInfo
logger.info("Information")
// Info 28-Mar-2023, 15:16:23 \src\controller.ts => Information

logger.debug("Debug Title", "printInfo")
// Debug 28-Mar-2023, 15:16:23 \src\controller.ts Information => printInfo
logger.debug("Information")
// Debug 28-Mar-2023, 15:16:23 \src\controller.ts => Information

logger.error("Error Title", ["Abc"])
// Error 28-Mar-2023, 15:16:23 \src\controller.ts Title => ["Abc"]
```