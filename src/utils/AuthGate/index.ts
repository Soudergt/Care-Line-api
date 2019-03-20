import * as config from "config";
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";

export default (request: Request, reply: Response, next: any) => {  
  const hasSession: boolean = typeof request.session !== "undefined" && typeof request.session.user !== "undefined";

  const url = request.raw.url.substr(1);
  
  const isPublicRoute: boolean = [
    "api/auth/login",
    "api/auth/logout",
  ].includes(url);

  if (!isPublicRoute && !hasSession) {
    reply.code(401);

    return next(new Error("Unauthorized"));
  }

  next();
}