import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { MessageService } from '../../libs/Message/message-service';

export class MessageRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getMessages,
      url: '/message/getMessages',
      method: 'GET',
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
                messages: {
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
      handler: this.sendMessage,
      url: '/message/send',
      method: 'POST',
      schema: {
        body: {
          uid: { type: "number" },
          message: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                message: {
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

  private async getMessages(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const messages = await new MessageService().getMessages(id);
      
      reply.code(200).send({
        data: { messages },
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

  private async sendMessage(request: Request, reply: Response) {
    try {
      const { id, message } = request.body;

      const newMessage = await new MessageService().sendMessage(id, message);
      
      reply.code(200).send({
        data: { newMessage },
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
