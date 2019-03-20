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
          uid: { type: 'string' },
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

    fastify.route({
      handler: this.addStatus,
      url: '/status/add',
      method: 'POST',
      schema: {
        body: {
          uid: { type: 'number' },
          status: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newStatus: {
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

    fastify.route({
      handler: this.editStatus,
      url: '/status/edit',
      method: 'PUT',
      schema: {
        body: {
          status: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedStatus: {
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

    fastify.route({
      handler: this.deleteStatus,
      url: '/status/delete',
      method: 'POST',
      schema: {
        body: {
          status: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedStatus: {
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

  private async getStatus(request: Request, reply: Response) {
    try {
      const { uid, date } = request.query;

      const status = await new StatusService().getStatus(uid, date);
      
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

  private async addStatus(request: Request, reply: Response) {
    try {
      const { uid, status } = request.body;

      const newStatus = await new StatusService().addStatus(uid, status);
      
      reply.code(200).send({
        data: { newStatus },
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

  private async editStatus(request: Request, reply: Response) {
    try {
      const status = request.body;

      const updatedStatus = await new StatusService().editStatus(status);
      
      reply.code(200).send({
        data: { updatedStatus },
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

  private async deleteStatus(request: Request, reply: Response) {
    try {
      const status = request.body;

      const removedStatus = await new StatusService().deleteStatus(status);
      
      reply.code(200).send({
        data: { removedStatus },
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
