import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { FeedbackService } from '../../libs/Feedback/feedback-service';

export class FeedbackRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getFeedback,
      url: '/feedback/getFeedback',
      method: 'GET',
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
                feedback: {
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

  private async getFeedback(request: Request, reply: Response) {
    try {
      const { uid } = request.params;

      const feedback = await new FeedbackService().getFeedback(uid);
      
      reply.code(200).send({
        data: { feedback },
        message: 'Successfully got feedback for user',
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: 'ERROR',
        statusCode: 400
      });
    }
  }

}
