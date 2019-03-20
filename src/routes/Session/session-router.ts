import { FastifyInstance } from "fastify";
import { Request } from './../../interfaces/Request';
import { Response } from './../../interfaces/Response';

export class SessionRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.checkSession,
      url: "/session/valid",
      method: "GET",
      schema: {
        response: {
          200: {
            properties: {
              valid: {
                type: "boolean"
              }
            },
            type: "object"
          },
          440: {
            type: "string"
          }
        }
      }
    });
  }

  private async checkSession(request: Request, reply: Response) {
    try {
      if (!request.session.user) {
        return reply.code(200).send({ valid: false });
      }

      reply.code(200).send({ valid: true });
    } catch (error) {
      reply.code(440).send({ valid: false });
    }
  }
}