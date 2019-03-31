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
          uid: { type: 'number' },
          date: { type: 'string' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                status: {
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
      handler: this.getStatusCounts,
      url: '/status/getStatusCounts',
      method: 'GET',
      schema: {
        querystring: {
          uids: { type: 'string' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                counts: {
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
          user: { type: 'object' },
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

  private async getStatusCounts(request: Request, reply: Response) {
    try {
      const { uids } = request.query;

      const counts = await new StatusService().getStatusCounts(uids);
      
      reply.code(200).send({
        data: { counts },
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
      const { user, status } = request.body;

      const newStatus = await new StatusService().addStatus(user, status);
      
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
      const { status } = request.body;

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
      const { status } = request.body;

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
