import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { ClinicService } from '../../libs/Clinic/clinic-service';

export class ClinicRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getClinics,
      url: '/clinic/getClinics',
      method: 'GET',
      schema: {
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

    fastify.route({
      handler: this.getClinic,
      url: "/clinic/getClinic/:id",
      method: "GET",
      schema: {
        querystring: {
          id: { type: 'number' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                clinic: {
                  type: "object"
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

  private async getClinics(request: Request, reply: Response) {
    try {
      const clinic = await new ClinicService().getClinics();
      
      reply.code(200).send({
        data: { clinic },
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

  private async getClinic(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const clinic = await new ClinicService().getClinic(id);
      
      reply.code(200).send({
        data: { clinic },
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
