import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { StatusService } from '../../libs/Status/status-service';

export class StatusRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getStatus,
      url: '/status/getStatus',
      method: 'GET',
      schema: {
        querystring: {
          date: { type: 'string' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                clinics: {
                  type: "array"
                },
                type: "object"
              }
            }
          },
          400: {
            properties: {
              data: { type: "object" },
              message: { type: "string" },
              statusCode: { type: "integer" }
            },
            type: "object"
          }
        }
      }
    });
  }

  private async getStatus(request: Request, reply: Response) {
    try {
      const status = await new StatusService().getStatus();
      
      reply.code(200).send({
        data: { status },
        message: 'SUCCESS',
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        data: {},
        message: 'ERROR',
        statusCode: 400
      });
    }
  }

}
