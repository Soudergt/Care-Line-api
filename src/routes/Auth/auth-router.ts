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

      request.session.user = user;

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
      request.sessionStore.destroy(
        request.session.sessionId,
        (err) => {
          if (err) {
            return reply.code(400).send({
              message: "Failed to log out",
              status: "ERROR",
            });
          }

          reply.code(200).send({
            message: "Successfully logged out",
            status: "SUCCESS",
          });
        }
      );
    } catch (error) {
      reply.code(400).send({
        data: {},
        message: 'ERROR',
        statusCode: 400
      });
    }
  }
}