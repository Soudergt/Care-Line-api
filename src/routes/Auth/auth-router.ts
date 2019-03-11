import { FastifyInstance} from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { AuthService } from '../../libs/Auth/auth-service';

export class AuthRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.login,
      url: '/auth/login',
      method: 'POST',
      schema: {
        body: {
          properties: {
            user: {
              type: "object"
            }
          }
        },
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
      const { info } = request.query;

      const login = await new AuthService().login(info.username, info.password);
      
      reply.code(200).send({
        data: {login: login},
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