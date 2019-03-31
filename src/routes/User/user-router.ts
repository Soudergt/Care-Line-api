import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { UserService } from '../../libs/User/user-service';

export class UserRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getUsers,
      url: '/user/getUsers',
      method: 'GET',
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                users: {
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
      handler: this.getPatients,
      url: '/user/getPatients',
      method: 'GET',
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                patients: {
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
      handler: this.getCaretakers,
      url: '/user/getCaretakers',
      method: 'GET',
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                caretakers: {
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
      handler: this.getUser,
      url: "/user/getUser/:uid",
      method: "GET",
      schema: {
        querystring: {
          uid: { type: 'number' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                user: {
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
      handler: this.addUser,
      url: '/user/add',
      method: 'POST',
      schema: {
        body: {
          user: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newUser: {
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
      handler: this.editUser,
      url: '/user/edit',
      method: 'PUT',
      schema: {
        body: {
          user: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedUser: {
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
      handler: this.deleteUser,
      url: '/user/delete',
      method: 'POST',
      schema: {
        body: {
          user: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedUser: {
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
      handler: this.getStatusCounts,
      url: '/user/getStatusCounts',
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
  }

  private async getUsers(request: Request, reply: Response) {
    try {
      const users = await new UserService().getUsers();

      reply.code(200).send({
        data: { users },
        message: "Successfully got users",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async getPatients(request: Request, reply: Response) {
    try {
      const patients = await new UserService().getPatients();

      reply.code(200).send({
        data: { patients },
        message: "Successfully got users",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async getCaretakers(request: Request, reply: Response) {
    try {
      const caretakers = await new UserService().getCaretakers();

      reply.code(200).send({
        data: { caretakers },
        message: "Successfully got users",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async getUser(request: Request, reply: Response) {
    try {
      const { uid } = request.query;

      const user = await new UserService().getUser(uid);
            
      reply.code(200).send({
        data: { user },
        message: "Successfully got user",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async addUser(request: Request, reply: Response) {
    try {
      const { user } = request.body;

      const newUser = await new UserService().addUser(user);
      
      reply.code(200).send({
        data: { newUser },
        message: "Successfully created user",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async editUser(request: Request, reply: Response) {
    try {
      const { user } = request.body;

      const updatedUser = await new UserService().editUser(user);
      
      reply.code(200).send({
        data: { updatedUser },
        message: "Successfully edited user",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async deleteUser(request: Request, reply: Response) {
    try {
      const { user } = request.body;
      
      const removedUser = await new UserService().deleteUser(user);
      
      reply.code(200).send({
        data: { removedUser },
        message: "Successfully deleted user",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async getStatusCounts(request: Request, reply: Response) {
    try {
      const { uids } = request.query;

      const counts = await new UserService().getStatusCounts(uids);
      
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
}
