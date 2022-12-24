# Ts_Logger

Example Code

```ts
import Logger from "./Logger";
// Initializing Logger with file path 
const logger: Logger = new Logger(__filename)

/*
You can set debug mode false by passing false as a second parameter
   const logger: Logger = new Logger(__filename,false)
*/

logger.info("Information", "printInfo")
logger.info(["Abc"], "printInfo")

logger.debug("Debug Information", "printDebug")
logger.debug(["Abc"], "printDebug")

logger.error("Error Information", "printError")
logger.error(["Abc"], "printError")
logger.error("Error: Type Error...", "printError", [{ "d": "4" }, { "e": "5" }], "Input Payload:")

```
