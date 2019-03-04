import * as config from "config";
import * as Pino from "pino";

export default class Logger {
  private logger: Pino.Logger;
  private enabled: boolean;

  constructor() {
    this.logger = Pino();
    this.enabled = config.get("server.logger");
  }

  public log(data: any) {
    if (!this.enabled) {
      return;
    }

    this.logger.info(data);
  }

  public error(error: Error) {
    this.logger.error(error.message, error.stack);
  }
}