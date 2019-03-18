import { FastifyInstance} from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { AuthService } from '../../libs/Auth/auth-service';
import { ErrorHandler } from '../../utils/ErrorHandler';

export class AuthRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.login,
      url: '/auth/login',
      method: 'POST',
      schema: {
        body: {
          properties: {
            username: { type: "string" },
            password: { type: "string" }
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
      handler: this.logout,
      url: '/auth/logout',
      method: 'POST',
      schema: {
        response: {
          200: {
            properties: {
              data: { type: 'object' },
              message: { type: 'string' },
              statusCode: { type: 'integer' }
            },
            type: 'object'
          },
          400: {
            properties: {
              data: { type: 'object' },
              message: { type: 'string' },
              statusCode: { type: 'integer' }
            },
            type: 'object'
          }
        }
      }
    });
  }

  private async login(request: Request, reply: Response) {
    try {
      const { username, password } = request.body;

      const user = await new AuthService().login(username, password);

      reply.code(200).send({
        data: { user },
        message: 'SUCCESS',
        statusCode: 200
      });
    } catch (error) {
      new ErrorHandler({
        code: 400,
        error,
        message: "Invalid username or password",
      }).handle(reply);
    }
  }

  private async logout(request: Request, reply: Response) {
    try {
      const logout = await new AuthService().logout();
      
      reply.code(200).send({
        data: {},
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