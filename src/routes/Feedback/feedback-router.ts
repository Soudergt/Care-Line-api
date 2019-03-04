import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { FeedbackService } from '../../libs/Feedback/feedback-service';

export class FeedbackRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getFeedback,
      url: '/feedback/:uid',
      method: 'GET',
      schema: {
        params: {
          uid: {
            type: "string"
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
