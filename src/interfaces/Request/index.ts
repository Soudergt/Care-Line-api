import { FastifyRequest } from "fastify";
import { IncomingMessage } from "http";

export interface Request extends FastifyRequest<IncomingMessage> {
  sessionStore: {
    destroy: (sessionId: string, callback: (err?: Error) => void) => void
  },
  session?: {
    user?: {};
    sessionId: string;
  };
}