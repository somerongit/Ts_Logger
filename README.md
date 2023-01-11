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

logger.info("Your log message or object","Log title")
// Wed, 11 Jan 2023 08:19:06 GMT Info: \src\index.ts : Log title  =>  Your log message or object

logger.info("Information", "printInfo")
//Wed, 11 Jan 2023 08:19:06 GMT Info: \src\index.ts : printInfo  =>  Information

logger.info(["Abc"], "printInfo")
/*
Wed, 11 Jan 2023 08:19:06 GMT Info: \src\index.ts : printInfo  => 
[ 'Abc' ]
*/

logger.debug("Debug Information", "printDebug")
// Wed, 11 Jan 2023 08:19:06 GMT Debug: \src\index.ts : printDebug  =>  Debug Information

logger.debug(["Abc"], "printDebug")
/*
Wed, 11 Jan 2023 08:19:06 GMT Debug: \src\index.ts : printDebug  => 
[ 'Abc' ]
*/

logger.error("Error Information", "printError")
// Wed, 11 Jan 2023 08:19:06 GMT Error: \src\index.ts : printError  =>  Error Information

logger.error(["Abc"], "printError")
/*
Wed, 11 Jan 2023 08:19:06 GMT Error: \src\index.ts : printError  => 
[ 'Abc' ]
*/

logger.error("Error: Type Error...", "printError", [{ "d": "4" }, { "e": "5" }], "Input Payload:")
/*
Wed, 11 Jan 2023 08:19:06 GMT Error: \src\index.ts : printError  =>  Error: Type Error...
Input Payload:
[ { d: '4' }, { e: '5' } ]
*/
```
