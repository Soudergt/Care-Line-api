import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { StatusService } from '../../libs/Status/status-service';
import { NeedsService } from '../../libs/Needs/needs-service';

export class NeedsRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getNeeds,
      url: '/needs/getNeeds',
      method: 'GET',
      schema: {
        querystring: {
          uid: { type: 'string' },
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
      handler: this.addNeed,
      url: '/need/add',
      method: 'POST',
      schema: {
        body: {
          user: { type: 'object' },
          need: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newNeed: {
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
      handler: this.editNeed,
      url: '/need/edit',
      method: 'PUT',
      schema: {
        body: {
          need: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedNeed: {
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
      handler: this.deleteNeed,
      url: '/need/delete',
      method: 'POST',
      schema: {
        body: {
          need: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedNeed: {
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

  private async getNeeds(request: Request, reply: Response) {
    try {
      const { uid } = request.query;

      const status = await new NeedsService().getNeeds(uid);
      
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

  private async addNeed(request: Request, reply: Response) {
    try {
      const { user, need } = request.body;

      const newNeed = await new NeedsService().addNeed(user, need);
      
      reply.code(200).send({
        data: { newNeed },
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

  private async editNeed(request: Request, reply: Response) {
    try {
      const { need } = request.body;

      const updatedNeed = await new NeedsService().editNeed(need);
      
      reply.code(200).send({
        data: { updatedNeed },
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

  private async deleteNeed(request: Request, reply: Response) {
    try {
      const { need } = request.body;

      const removedNeed = await new NeedsService().deleteNeed(need);
      
      reply.code(200).send({
        data: { removedNeed },
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
