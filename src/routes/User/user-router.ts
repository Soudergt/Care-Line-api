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
      handler: this.getUser,
      url: "/user/:uid",
      method: "GET",
      schema: {
        params: {
          uid: {
            type: "string"
          }
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
      handler: this.editUser,
      url: '/user/edit',
      method: 'POST',
      schema: {
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
      handler: this.deleteUser,
      url: '/user/delete',
      method: 'POST',
      schema: {
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

  private async getUser(request: Request, reply: Response) {
    try {
      const { uid } = request.params;

      const user = await new UserService().getUserV2(uid);
            
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
      const { newUser } = request.query;

      const user = await new UserService().addUser(newUser);
      
      reply.code(200).send({
        data: { user },
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
      const { selectedUser } = request.query;

      const user = await new UserService().editUser(selectedUser);
      
      reply.code(200).send({
        data: { user },
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
      const { userID } = request.query;

      const user = await new UserService().deleteUser(userID);
      
      reply.code(200).send({
        data: { user },
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
}
