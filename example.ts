import Logger from "./Logger";
// Initializing Logger with file path 
const logger: Logger = new Logger(__filename)

/*
You can set debug mode false by passing false as a second parameter
   const logger: Logger = new Logger(__filename,false)
*/

logger.info("Information", "printInfo")
// Info 28-Mar-2023, 15:16:23 \src\controller.ts Information => printInfo
logger.info("Information")
// Info 28-Mar-2023, 15:16:23 \src\controller.ts => Information
logger.info("Title", ["Abc"])
// Info 28-Mar-2023, 15:16:23 \src\controller.ts Title => ["Abc"]

logger.debug("Information", "printInfo")
// Debug 28-Mar-2023, 15:16:23 \src\controller.ts Information => printInfo
logger.debug("Information")
// Debug 28-Mar-2023, 15:16:23 \src\controller.ts => Information
logger.debug("Title", ["Abc"])
// Debug 28-Mar-2023, 15:16:23 \src\controller.ts Title => ["Abc"]

logger.error("Information", "printInfo")
// Error 28-Mar-2023, 15:16:23 \src\controller.ts Information => printInfo
logger.error("Information")
// Error 28-Mar-2023, 15:16:23 \src\controller.ts => Information
logger.error("Title", ["Abc"])
// Error 28-Mar-2023, 15:16:23 \src\controller.ts Title => ["Abc"]