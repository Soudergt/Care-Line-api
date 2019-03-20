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

    fastify.route({
      handler: this.addClinic,
      url: '/clinic/add',
      method: 'POST',
      schema: {
        body: {
          clinic: { type: "object" }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newClinic: {
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
      handler: this.editClinic,
      url: '/clinic/edit',
      method: 'PUT',
      schema: {
        body: {
          clinic: { type: "object" }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedClinic: {
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
      handler: this.deleteClinic,
      url: '/clinic/delete',
      method: 'POST',
      schema: {
        body: {
          clinic: { type: "object" }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedClinic: {
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

  private async addClinic(request: Request, reply: Response) {
    try {
      const clinic = request.body;

      const newClinic = await new ClinicService().addClinic(clinic);
      
      reply.code(200).send({
        data: { newClinic },
        message: "Successfully created clinic",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async editClinic(request: Request, reply: Response) {
    try {
      const clinic = request.body;

      const updatedClinic = await new ClinicService().editClinic(clinic);
      
      reply.code(200).send({
        data: { updatedClinic },
        message: "Successfully updated clinic",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async deleteClinic(request: Request, reply: Response) {
    try {
      const clinic = request.body;

      const removedClinic = await new ClinicService().deleteClinic(clinic);
      
      reply.code(200).send({
        data: { removedClinic },
        message: "Successfully removed clinic",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }
}
