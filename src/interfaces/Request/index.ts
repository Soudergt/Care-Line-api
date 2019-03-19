import { FastifyRequest } from "fastify";
import { IncomingMessage } from "http";

export interface Request extends FastifyRequest<IncomingMessage> {
  sessionStore: {
    destroy: (sessionId: string, callback: (err?: Error) => void) => void
  },
  session?: {
    tfid?: string;
    user?: {
      fn?: string;
      ln?: string;
      uid?: string;
      fbid?: string;
      img?: string
    };
    sessionId: string;
    time?: number;
  };
}