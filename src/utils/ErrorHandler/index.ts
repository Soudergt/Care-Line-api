import Logger from '../Logger';
import { Response } from './../../interfaces/Response';

export class ErrorHandler {
  private error: Error;
  private message: string = "Unknown Server Error";
  private code: number = 500;
  private logger: Logger;

  constructor(params: { error: Error, message?: string, code?: number }) {
    this.logger = new Logger();
    this.error = params.error;

    if (typeof params.message !== "undefined") {
      this.message = params.message;
    }
    
    if (typeof params.code !== "undefined") {
      this.code = params.code;
    }
  }

  public handle(reply: Response) {
    this.logger.error(this.error);

    reply.code(this.code).send({
      message: this.message,
      status: "ERROR",
    });
  }

}