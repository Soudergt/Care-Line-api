import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { RatingService } from '../../libs/Rating/rating-service';

export class RatingRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getRating,
      url: '/rating/getRating',
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
                rating: {
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

  private async getRating(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const rating = await new RatingService().getRating(id);
      
      reply.code(200).send({
        data: { rating },
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
