import app from "./src/app.js";
import { config } from "./src/config/index.js";
import { config } from "dotenv";
config()
import { logger } from "./src/utils/index.js";
const startApp = async () => {
  try {
    app.listen(config.port.port, () => {
      logger.info(`${config.port.port} started ...`);
    });
  } catch (error) {
    logger.error(error);
  }
};

startApp();
